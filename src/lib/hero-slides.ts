import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export type HeroSlide = { id: string; path: string; url: string };

export const HERO_BUCKET = "hero-photos";
export const HERO_MAX_SLIDES = 8;

/** Public read of the hero photos, ordered, with week-long signed URLs (bucket is private). */
export const listHeroSlides = createServerFn({ method: "GET" }).handler(async (): Promise<HeroSlide[]> => {
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const sb = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { data, error } = await sb.from("hero_slides").select("id, image_path").order("position").order("created_at");
    if (error || !data?.length) return [];
    const { data: signed } = await sb.storage.from(HERO_BUCKET).createSignedUrls(data.map((r) => r.image_path), 60 * 60 * 24 * 7);
    // Signed URLs point at the server-side address; rewrite to the browser-facing one.
    const pub = (import.meta.env.VITE_SUPABASE_URL || "").replace(/\/+$/, "");
    const srv = (process.env["SUPABASE_URL"] || "").replace(/\/+$/, "");
    return data.flatMap((r, i) => {
      const u = signed?.[i]?.signedUrl;
      if (!u) return [];
      return [{ id: r.id, path: r.image_path, url: pub && srv && u.startsWith(srv) ? pub + u.slice(srv.length) : u }];
    });
  } catch {
    return [];
  }
});

export const heroSlidesQuery = queryOptions({
  queryKey: ["hero-slides"],
  queryFn: () => listHeroSlides(),
  staleTime: 60_000,
});

/** Crossfade timing (unchanged from the original 3-scene design): 6s per scene, 1.44s fades. */
export function heroTiming(n: number) {
  const cycle = Math.max(n, 1) * 6;
  const pct = (s: number) => `${((s / cycle) * 100).toFixed(2)}%`;
  return { cycle, inEnd: pct(1.44), hold: pct(5.94), outEnd: pct(7.38) };
}
