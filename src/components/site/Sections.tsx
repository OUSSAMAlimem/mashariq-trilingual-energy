import { ArrowRight, Check, MapPin, Phone, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Img } from "./Img";
import { Reveal, useParallax } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { Logo } from "./Header";

const btnSun = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sun px-7 font-medium text-primary-foreground transition hover:shadow-glow";
const btnGhost = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 text-foreground transition hover:border-sun hover:text-sun";
const Arrow = () => <ArrowRight size={18} aria-hidden className="rtl:-scale-x-100" />;

export function Hero() {
  const { t } = useI18n();
  const p = useParallax<HTMLDivElement>(0.12);
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-end overflow-hidden pb-14 pt-28 sm:min-h-[100svh] sm:items-center sm:pb-20">
      <div ref={p} className="absolute inset-0 -z-10 will-change-transform">
        <Img k="hero" alt={t.hero.alt} eager className="hero-zoom h-full w-full object-cover object-[30%_center] sm:object-center" />
      </div>
      <div className="absolute inset-0 -z-10 bg-scrim" />
      <div className="absolute inset-0 -z-10 bg-scrim-side" />
      <div className="container-x">
        <p className="kicker rise">{t.hero.kicker}</p>
        <h1 className="h-display rise mt-5 max-w-4xl" style={{ "--d": "120ms" } as React.CSSProperties}>
          {t.hero.h1a} {t.hero.h1b}<br /><span className="em-serif">{t.hero.h1em}</span>
        </h1>
        <p className="rise mt-6 max-w-md text-lg text-foreground/85 sm:text-xl" style={{ "--d": "260ms" } as React.CSSProperties}>{t.hero.sub}</p>
        <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "380ms" } as React.CSSProperties}>
          <a href="#contact" className={btnSun}>{t.hero.cta} <Arrow /></a>
          <a href="#solutions" className={btnGhost}>{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  const { t } = useI18n();
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <div className="container-x grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-end">
        <Reveal>
          <p className="kicker">{t.intro.kicker}</p>
          <h2 className="h-section mt-4">{t.intro.h2a} <span className="em-serif">{t.intro.h2em}</span></h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t.intro.sub}</p>
          <a href="#solutions" className={`${btnGhost} mt-8`}>{t.intro.cta} <Arrow /></a>
        </Reveal>
        <Reveal delay={150}>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 md:grid-cols-1">
            {t.intro.tags.map((g, i) => (
              <li key={g} className="flex items-center justify-between bg-ink px-5 py-5 text-lg">
                <span>{g}</span><span className="font-mono text-xs text-sun">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Conviction() {
  const { t } = useI18n();
  const [a = "", rest = ""] = t.conviction.text.split("{1}");
  const [b, c] = rest.split("{2}");
  const p = useParallax<HTMLDivElement>(0.1);
  return (
    <section aria-label={t.conviction.kicker} className="relative isolate overflow-hidden py-24 sm:py-36">
      <div ref={p} className="absolute inset-0 -z-10"><Img k="conviction" alt={t.conviction.alt} className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 -z-10 bg-ink/75" />
      <Reveal className="container-x">
        <p className="kicker">{t.conviction.kicker}</p>
        <p className="mt-6 max-w-5xl text-[clamp(1.6rem,4.2vw,3.4rem)] leading-tight text-balance">
          {a}<span className="em-serif">{t.conviction.em1}</span>{b}<span className="em-serif">{t.conviction.em2}</span>{c}
        </p>
      </Reveal>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="apropos" className="py-20 sm:py-32">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal className="min-w-0">
          <p className="kicker">{t.about.kicker}</p>
          <h2 className="h-section mt-4">{t.about.h2a} <span className="em-serif">{t.about.h2em}</span></h2>
          <p className="mt-6 text-lg text-foreground/85">{t.about.p1}</p>
          <p className="mt-4 text-lg text-muted-foreground">{t.about.p2}</p>
          <a href="#contact" className={`${btnSun} mt-8`}>{t.about.cta} <Arrow /></a>
        </Reveal>
        <Reveal delay={150} className="min-w-0 overflow-hidden rounded-lg">
          <Img k="about" alt={t.about.alt} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] hover:scale-105 lg:aspect-[4/5]" />
        </Reveal>
      </div>
    </section>
  );
}

export function Solutions() {
  const { t } = useI18n();
  return (
    <section id="solutions" className="bg-ink-2 py-20 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="kicker">{t.solutions.kicker}</p>
          <h2 className="h-section mt-4">{t.solutions.h2a} <span className="em-serif">{t.solutions.h2em}</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.solutions.sub}</p>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {t.solutions.items.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 120} className="group bg-ink-2 p-7 transition-colors hover:bg-ink sm:p-9">
              <span className="font-mono text-xs text-sun">0{i + 1}</span>
              <h3 className="mt-6 text-2xl font-normal sm:text-3xl">{s.t}</h3>
              <div className="my-5 h-px w-10 bg-sun transition-all duration-500 group-hover:w-20" />
              <p className="text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="overflow-hidden rounded-lg"><Img k="solutions" alt={t.solutions.alt} sizes="(min-width:768px) 70vw, 100vw" className="aspect-[16/9] w-full object-cover md:aspect-[21/9]" /></div>
          <a href="#contact" className={btnSun}>{t.solutions.cta} <Arrow /></a>
        </Reveal>
      </div>
    </section>
  );
}

export function Method() {
  const { t } = useI18n();
  return (
    <section id="methode" className="py-20 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">{t.method.kicker}</p>
          <h2 className="h-section mt-4">{t.method.h2a} <span className="em-serif">{t.method.h2em}</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.method.sub}</p>
          <div className="mt-8 overflow-hidden rounded-lg"><Img k="field" alt={t.method.alt} sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[16/10] w-full object-cover" /></div>
        </Reveal>
        <ol className="min-w-0">
          {t.method.items.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 100} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-border py-8 last:border-b sm:grid-cols-[5rem_minmax(0,1fr)]">
              <span className="font-display text-3xl italic text-sun sm:text-4xl">0{i + 1}</span>
              <div><h3 className="text-xl font-normal sm:text-2xl">{s.t}</h3><p className="mt-2 text-muted-foreground">{s.d}</p></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Field() {
  const { t } = useI18n();
  const p = useParallax<HTMLDivElement>(0.12);
  return (
    <section aria-labelledby="field-h" className="relative isolate overflow-hidden py-24 sm:py-36">
      <div ref={p} className="absolute inset-0 -z-10"><Img k="field" alt="" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 -z-10 bg-scrim-side" />
      <div className="absolute inset-0 -z-10 bg-ink/40" />
      <Reveal className="container-x max-w-3xl">
        <p className="kicker">{t.field.kicker}</p>
        <h2 id="field-h" className="h-section mt-4"><span className="em-serif">{t.field.h2em}</span> {t.field.h2b}</h2>
        <p className="mt-5 text-lg text-foreground/85">{t.field.sub}</p>
        <ul className="mt-8 space-y-3">
          {t.field.points.map((x) => <li key={x} className="flex items-start gap-3"><Check size={20} className="mt-0.5 shrink-0 text-sun" aria-hidden />{x}</li>)}
        </ul>
        <a href="#contact" className={`${btnSun} mt-10`}>{t.field.cta} <Arrow /></a>
      </Reveal>
    </section>
  );
}

export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal className="min-w-0">
          <p className="kicker">{t.faq.kicker}</p>
          <h2 className="h-section mt-4">{t.faq.h2a} <span className="em-serif">{t.faq.h2em}</span></h2>
        </Reveal>
        <div className="min-w-0">
          {t.faq.items.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group border-t border-border last-of-type:border-b [&_summary::-webkit-details-marker]:hidden" name="faq">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-6 text-lg sm:text-xl">
                  <span className="mt-1.5 font-mono text-xs text-sun">0{i + 1}</span>
                  <h3 className="min-w-0 flex-1 font-normal">{f.q}</h3>
                  <Plus size={22} aria-hidden className="mt-1 shrink-0 text-sun transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="pb-6 ps-8 text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative isolate overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10"><Img k="contact" alt={t.contact.alt} className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 -z-10 bg-ink/70" />
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal className="min-w-0">
          <p className="kicker">{t.contact.kicker}</p>
          <h2 className="h-section mt-4">{t.contact.h2a} <span className="em-serif">{t.contact.h2em}</span></h2>
          <p className="mt-5 text-lg text-foreground/85">{t.contact.sub}</p>
          <address className="mt-10 space-y-6 not-italic">
            <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-sun" size={20} aria-hidden /><div><p className="kicker">{t.contact.address}</p><p className="mt-1 text-lg">{t.contact.addressValue}</p></div></div>
            <div className="flex gap-4"><Phone className="mt-1 shrink-0 text-sun" size={20} aria-hidden /><div><p className="kicker">{t.contact.phone}</p><a href="tel:+21621054054" dir="ltr" className="mt-1 inline-block text-lg hover:text-sun">+216 21 054 054</a></div></div>
          </address>
        </Reveal>
        <Reveal delay={150} className="min-w-0"><ContactForm /></Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div><Logo /><p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {([["#apropos", t.nav.about], ["#solutions", t.nav.solutions], ["#methode", t.nav.method], ["#faq", t.nav.faq], ["#contact", t.nav.contact]] as const).map(([h, l]) => <a key={h} href={h} className="hover:text-sun">{l}</a>)}
        </nav>
        <div className="text-sm text-muted-foreground"><a href="tel:+21621054054" dir="ltr" className="block hover:text-sun">+216 21 054 054</a><p className="mt-1">© {new Date().getFullYear()} MASHARIQ Energy. {t.footer.rights}</p></div>
      </div>
    </footer>
  );
}
