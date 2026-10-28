import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LANGS } from "@/lib/content";

export function Logo() {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="MASHARIQ Energy">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden className="text-sun">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="16" r="4" fill="currentColor" />
      </svg>
      <span dir="ltr" className="leading-none">
        <span className="block text-[0.95rem] font-medium tracking-[0.2em]">MASHARIQ</span>
        <span className="mt-1 block font-mono text-[0.6rem] tracking-[0.4em] text-sun">ENERGY</span>
      </span>
    </a>
  );
}

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div role="group" aria-label="Language" className={`flex rounded-full border border-border bg-ink/60 p-1 backdrop-blur ${className}`}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          lang={l}
          className={`min-h-9 min-w-10 rounded-full px-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${lang === l ? "bg-sun text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    ["#apropos", t.nav.about], ["#solutions", t.nav.solutions], ["#methode", t.nav.method], ["#faq", t.nav.faq], ["#contact", t.nav.contact],
  ] as const;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-border bg-ink/85 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8">
            {links.map(([h, l]) => (
              <li key={h}><a href={h} className="relative py-2 text-[0.95rem] text-foreground/85 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-sun after:transition-transform hover:text-foreground hover:after:scale-x-100">{l}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch className="hidden sm:flex" />
          <a href="#contact" className="hidden rounded-full bg-sun px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-glow md:inline-flex">{t.nav.quote}</a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}
        inert={!open}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="container-x flex h-[calc(100dvh-var(--header-h))] flex-col pb-8 pt-4">
            <ul className="flex flex-col">
              {links.map(([h, l], i) => (
                <li key={h} className="border-b border-border">
                  <a href={h} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 text-2xl">
                    <span className="font-mono text-xs text-sun">0{i + 1}</span>{l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4 pt-8">
              <LangSwitch className="self-start sm:hidden" />
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-sun py-4 text-center font-medium text-primary-foreground">{t.nav.quote}</a>
              <a href="tel:+21621054054" dir="ltr" className="text-center text-muted-foreground">+216 21 054 054</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
