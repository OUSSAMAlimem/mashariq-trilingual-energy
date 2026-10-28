import hero8 from "@/assets/hero-800.webp";
import hero16 from "@/assets/hero-1600.webp";
import conv8 from "@/assets/conviction-800.webp";
import conv16 from "@/assets/conviction-1600.webp";
import about8 from "@/assets/about-800.webp";
import about16 from "@/assets/about-1600.webp";
import sol8 from "@/assets/solutions-800.webp";
import sol16 from "@/assets/solutions-1600.webp";
import field8 from "@/assets/field-800.webp";
import field16 from "@/assets/field-1600.webp";
import contact8 from "@/assets/contact-800.webp";
import contact16 from "@/assets/contact-1600.webp";

const SRC = {
  hero: [hero8, hero16, 1600, 907],
  conviction: [conv8, conv16, 1600, 900],
  about: [about8, about16, 1600, 900],
  solutions: [sol8, sol16, 1600, 900],
  field: [field8, field16, 1600, 900],
  contact: [contact8, contact16, 1600, 900],
} as const;

export type ImgKey = keyof typeof SRC;

export function Img({
  k, alt, className, eager, sizes = "100vw",
}: { k: ImgKey; alt: string; className?: string; eager?: boolean; sizes?: string }) {
  const [s, l, w, h] = SRC[k];
  return (
    <img
      src={l}
      srcSet={`${s} 800w, ${l} 1600w`}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      className={className}
    />
  );
}
