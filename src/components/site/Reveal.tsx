import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export function Reveal({
  as: Tag = "div", delay = 0, className = "", children,
}: { as?: ElementType; delay?: number; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}

/** Light parallax for a background image wrapper; disabled on small screens & reduced motion. */
export function useParallax<T extends HTMLElement>(strength = 0.15) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)");
    if (mq.matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.parentElement!.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -strength;
        el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0) scale(1.15)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [strength]);
  return ref;
}
