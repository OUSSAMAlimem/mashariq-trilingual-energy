import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowDown, ArrowUp, Trash2, Upload, LogOut } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { HERO_BUCKET, HERO_MAX_SLIDES } from "@/lib/hero-slides";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Photos d'accueil — Administration MASHARIQ Energy" },
      { name: "description", content: "Espace privé pour gérer les photos de fond de la page d'accueil MASHARIQ Energy." },
      { property: "og:title", content: "Administration MASHARIQ Energy" },
      { property: "og:description", content: "Gestion des photos de fond de la page d'accueil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const btn = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition disabled:opacity-50";
const btnSun = `${btn} bg-sun text-primary-foreground hover:shadow-glow`;
const btnGhost = `${btn} border border-foreground/30 hover:border-sun hover:text-sun`;
const input = "min-h-12 w-full rounded-lg border border-input bg-ink-2 px-4 text-foreground outline-none focus:border-sun";

function AdminPage() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((e, s) => {
      if (e === "SIGNED_IN" || e === "SIGNED_OUT" || e === "USER_UPDATED") setSession(s);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <main className="min-h-screen py-12">
      <div className="container-x max-w-3xl">
        <Link to="/" className="kicker hover:underline">← MASHARIQ Energy</Link>
        <h1 className="h-section mt-4 text-[clamp(2rem,4vw,3rem)]">Photos <span className="em-serif">d'accueil</span></h1>
        {session === undefined ? <p className="mt-8 text-muted-foreground">Chargement…</p>
          : session ? <Manager session={session} /> : <SignIn />}
      </div>
    </main>
  );
}

function SignIn() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg(null);
    const r = mode === "in"
      ? await supabase.auth.signInWithPassword({ email, password: pw })
      : await supabase.auth.signUp({ email, password: pw, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    setBusy(false);
    if (r.error) setMsg(r.error.message);
    else if (mode === "up" && !r.data.session) setMsg("Compte créé. Ouvrez le lien reçu par e-mail pour le confirmer, puis connectez-vous.");
  };

  return (
    <div className="mt-8 max-w-md space-y-5">
      <p className="text-muted-foreground">Connectez-vous pour gérer les photos de fond de la page d'accueil.</p>
      <button type="button" className={`${btnGhost} w-full`} onClick={async () => {
        const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: `${window.location.origin}/admin` });
        if (r.error) setMsg(r.error.message);
      }}>Continuer avec Google</button>
      <form onSubmit={submit} className="space-y-3">
        <input className={input} type="email" required autoComplete="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={input} type="password" required minLength={8} autoComplete={mode === "in" ? "current-password" : "new-password"} placeholder="Mot de passe" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className={`${btnSun} w-full`} disabled={busy}>{mode === "in" ? "Se connecter" : "Créer le compte"}</button>
      </form>
      <button type="button" className="text-sm text-muted-foreground hover:text-sun" onClick={() => setMode(mode === "in" ? "up" : "in")}>
        {mode === "in" ? "Pas encore de compte ? Créer un compte" : "Déjà un compte ? Se connecter"}
      </button>
      {msg && <p role="status" className="text-sm text-sun">{msg}</p>}
    </div>
  );
}

type Row = { id: string; image_path: string; position: number; url?: string };

async function toWebp(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, 2000 / bmp.width);
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * scale); c.height = Math.round(bmp.height * scale);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("Conversion impossible"))), "image/webp", 0.82));
}

function Manager({ session }: { session: Session }) {
  const qc = useQueryClient();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase.from("hero_slides").select("id, image_path, position").order("position").order("created_at");
    const list = data ?? [];
    const { data: signed } = list.length ? await supabase.storage.from(HERO_BUCKET).createSignedUrls(list.map((r) => r.image_path), 3600) : { data: [] };
    setRows(list.map((r, i) => ({ ...r, url: signed?.[i]?.signedUrl ?? undefined })));
  }, []);

  useEffect(() => {
    supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
    load();
  }, [session.user.id, load]);

  const done = async (m: string) => { await load(); await qc.invalidateQueries({ queryKey: ["hero-slides"] }); setMsg(m); setBusy(false); };

  const upload = async (files: FileList | null) => {
    if (!files?.length) return;
    const room = HERO_MAX_SLIDES - rows.length;
    if (room <= 0) { setMsg(`Maximum ${HERO_MAX_SLIDES} photos.`); return; }
    setBusy(true); setMsg("Envoi en cours…");
    let pos = rows.length ? Math.max(...rows.map((r) => r.position)) + 1 : 0;
    try {
      for (const f of Array.from(files).slice(0, room)) {
        const blob = await toWebp(f);
        const path = `${crypto.randomUUID()}.webp`;
        const up = await supabase.storage.from(HERO_BUCKET).upload(path, blob, { contentType: "image/webp" });
        if (up.error) throw up.error;
        const ins = await supabase.from("hero_slides").insert({ image_path: path, position: pos++ });
        if (ins.error) throw ins.error;
      }
      await done("Photos ajoutées.");
    } catch (e) { setBusy(false); setMsg(e instanceof Error ? e.message : "Échec de l'envoi."); }
  };

  const move = async (i: number, d: -1 | 1) => {
    const a = rows[i], b = rows[i + d]; if (!a || !b) return;
    setBusy(true);
    const order = rows.map((r) => r.id); [order[i], order[i + d]] = [order[i + d], order[i]];
    await Promise.all(order.map((id, p) => supabase.from("hero_slides").update({ position: p }).eq("id", id)));
    await done("Ordre mis à jour.");
  };

  const remove = async (r: Row) => {
    if (!confirm("Supprimer cette photo ?")) return;
    setBusy(true);
    await supabase.from("hero_slides").delete().eq("id", r.id);
    await supabase.storage.from(HERO_BUCKET).remove([r.image_path]);
    await done("Photo supprimée.");
  };

  if (isAdmin === null) return <p className="mt-8 text-muted-foreground">Chargement…</p>;

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>{session.user.email}</span>
        <button type="button" className={btnGhost} onClick={() => supabase.auth.signOut()}><LogOut size={16} aria-hidden /> Se déconnecter</button>
      </div>
      {!isAdmin ? (
        <p className="rounded-lg border border-border p-5 text-muted-foreground">Ce compte n'a pas les droits d'administration.</p>
      ) : (
        <>
          <p className="text-muted-foreground">
            Les photos défilent dans cet ordre, avec le même fondu, zoom et défilement lent. Sans photo, les images d'origine sont affichées.
            Format paysage conseillé (au moins 1600 px de large). Maximum {HERO_MAX_SLIDES}.
          </p>
          <label className={`${btnSun} cursor-pointer ${busy || rows.length >= HERO_MAX_SLIDES ? "pointer-events-none opacity-50" : ""}`}>
            <Upload size={16} aria-hidden /> Ajouter des photos
            <input type="file" accept="image/*" multiple className="sr-only" disabled={busy} onChange={(e) => { upload(e.target.files); e.target.value = ""; }} />
          </label>
          {msg && <p role="status" className="text-sm text-sun">{msg}</p>}
          <ol className="space-y-3">
            {rows.map((r, i) => (
              <li key={r.id} className="flex items-center gap-4 rounded-lg border border-border bg-ink-2 p-3">
                <span className="w-6 text-center font-mono text-sm text-sun">{i + 1}</span>
                {r.url ? <img src={r.url} alt={`Photo ${i + 1}`} className="aspect-video w-36 rounded object-cover sm:w-48" /> : <div className="aspect-video w-36 rounded bg-muted sm:w-48" />}
                <div className="ms-auto flex gap-2">
                  <button type="button" aria-label="Monter" className={`${btnGhost} px-3`} disabled={busy || i === 0} onClick={() => move(i, -1)}><ArrowUp size={16} /></button>
                  <button type="button" aria-label="Descendre" className={`${btnGhost} px-3`} disabled={busy || i === rows.length - 1} onClick={() => move(i, 1)}><ArrowDown size={16} /></button>
                  <button type="button" aria-label="Supprimer" className={`${btnGhost} px-3 hover:border-destructive hover:text-destructive`} disabled={busy} onClick={() => remove(r)}><Trash2 size={16} /></button>
                </div>
              </li>
            ))}
          </ol>
          {!rows.length && <p className="text-sm text-muted-foreground">Aucune photo pour l'instant : la page d'accueil affiche les images d'origine.</p>}
        </>
      )}
    </div>
  );
}
