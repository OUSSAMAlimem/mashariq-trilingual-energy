import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { DICT } from "@/lib/content";
import { Header } from "@/components/site/Header";
import { Hero, Intro, Conviction, About, Solutions, Method, Field, Faq, Contact, Footer } from "@/components/site/Sections";

const TITLE = "MASHARIQ Energy — Installation photovoltaïque à Monastir, Tunisie";
const DESC = "Étude et installation photovoltaïque pour maisons et entreprises à Monastir : résidentiel, tertiaire et industriel. Étude gratuite au +216 21 054 054.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MASHARIQ Energy",
    description: DESC,
    telephone: "+216 21 054 054",
    address: { "@type": "PostalAddress", streetAddress: "94 Neopark", addressLocality: "Monastir", postalCode: "5000", addressCountry: "TN" },
    areaServed: "Monastir, Tunisie",
    knowsLanguage: ["fr", "ar", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DICT.fr.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_TN" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: jsonLd.map((j) => ({ type: "application/ld+json", children: JSON.stringify(j) })),
  }),
  component: Index,
});

function Page() {
  const { t } = useI18n();
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded bg-sun px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4">{t.skip}</a>
      <Header />
      <main id="main">
        <Hero /><Intro /><Conviction /><About /><Solutions /><Method /><Field /><Faq /><Contact />
      </main>
      <Footer />
    </>
  );
}

function Index() {
  return <I18nProvider><Page /></I18nProvider>;
}
