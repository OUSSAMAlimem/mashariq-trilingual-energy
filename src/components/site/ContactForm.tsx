import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";

type Errs = Partial<Record<"name" | "email" | "message" | "consent" | "form", string>>;

const field = "w-full min-h-12 rounded-md border border-input bg-ink/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition focus:border-sun focus:outline-none focus:ring-2 focus:ring-sun/30";
const label = "mb-1.5 block text-sm text-muted-foreground";

export function ContactForm() {
  const { t, lang } = useI18n();
  const f = t.contact.f;
  const [errs, setErrs] = useState<Errs>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = Object.fromEntries(fd) as Record<string, string>;
    const schema = z.object({
      name: z.string().trim().min(2, t.contact.err.name).max(120),
      email: z.string().trim().email(t.contact.err.email).max(200),
      message: z.string().trim().min(5, t.contact.err.message).max(3000),
      consent: z.literal("on", { errorMap: () => ({ message: t.contact.err.consent }) }),
    });
    const r = schema.safeParse(v);
    if (!r.success) {
      const next: Errs = {};
      r.error.issues.forEach((i) => { next[i.path[0] as keyof Errs] ??= i.message; });
      setErrs(next);
      const first = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrs({});
    setStatus("sending");
    const { error } = await supabase.from("quote_requests").insert({
      full_name: r.data.name,
      email: r.data.email,
      phone: (v["phone"] || "").trim().slice(0, 40) || null,
      client_type: v["type"] || null,
      location: (v["location"] || "").trim().slice(0, 160) || null,
      message: r.data.message,
      language: lang,
    });
    if (error) { setStatus("idle"); setErrs({ form: t.contact.err.generic }); return; }
    setStatus("ok");
  }

  if (status === "ok") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-lg border border-border bg-ink-2/80 p-8 backdrop-blur">
        <CheckCircle2 className="text-success" size={36} aria-hidden />
        <p className="text-lg">{t.contact.ok}</p>
      </div>
    );
  }

  const err = (k: keyof Errs) => errs[k] && <p id={`${k}-err`} className="mt-1.5 text-sm text-destructive">{errs[k]}</p>;
  const aria = (k: keyof Errs) => ({ "aria-invalid": !!errs[k] || undefined, "aria-describedby": errs[k] ? `${k}-err` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 gap-5 rounded-lg border border-border bg-ink-2/80 p-5 backdrop-blur sm:grid-cols-2 sm:p-8">
      <div className="min-w-0"><label htmlFor="name" className={label}>{f.name} *</label><input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />{err("name")}</div>
      <div className="min-w-0"><label htmlFor="email" className={label}>{f.email} *</label><input id="email" name="email" type="email" inputMode="email" autoComplete="email" dir="ltr" className={field} {...aria("email")} />{err("email")}</div>
      <div className="min-w-0"><label htmlFor="phone" className={label}>{f.tel}</label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className={field} /></div>
      <div className="min-w-0"><label htmlFor="type" className={label}>{f.type}</label>
        <select id="type" name="type" className={field} defaultValue="">
          <option value="">—</option>
          {f.typeOpts.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="min-w-0 sm:col-span-2"><label htmlFor="location" className={label}>{f.location}</label><input id="location" name="location" autoComplete="address-level2" className={field} /></div>
      <div className="min-w-0 sm:col-span-2"><label htmlFor="message" className={label}>{f.message} *</label><textarea id="message" name="message" rows={5} className={`${field} resize-y`} {...aria("message")} />{err("message")}</div>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm">
          <input type="checkbox" name="consent" className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--sun)]" {...aria("consent")} />
          <span>{f.consent}</span>
        </label>
        {err("consent")}
      </div>
      {errs.form && <p role="alert" className="text-sm text-destructive sm:col-span-2">{errs.form}</p>}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">{f.privacy}</p>
        <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-sun px-7 font-medium text-primary-foreground transition hover:shadow-glow disabled:opacity-70">
          {status === "sending" && <Loader2 className="animate-spin" size={18} aria-hidden />}
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
