import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `How To Play ${siteConfig.gameName} ({Month} {Year}) - Beginner Starter Guide`,
  description: `Learn how to play ${siteConfig.gameName} in {Month} {Year}, from painting keys to earning cash and choosing first upgrades.`,
  alternates: { canonical: `${siteConfig.domain}/guides/beginner` }
};

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Beginner Guide", href: "/guides/beginner" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Beginner", href: "/guides/beginner" }]} />
      <PageIntro eyebrow="Beginner" title={`How To Play ${siteConfig.gameName}`} description="Start with the verified loop: paint keys, collect cash, check whether better paints or roller upgrades help next, then expand your keyboard when it makes sense." />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {["Paint colorful keyboard keys.", "Collect cash from painted keys.", "Compare better paints and roller upgrades.", "Expand your keyboard after checking costs."].map((step, index) => (
          <article className="content-card" key={step}><span className="mini-label">Step {index + 1}</span><h2 className="mt-3 text-xl font-bold text-white">{step}</h2><p className="mt-2 text-sm leading-6 text-white/65">This step is based on the official Roblox description. Exact prices and formulas still need live data.</p></article>
        ))}
      </section>
      <SectionHeader eyebrow="Next" title="Keep going" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/codes">Codes</Link><Link className="button-secondary" href="/tier-list">Tier list</Link><Link className="button-secondary" href="/calculator">Calculator</Link></div>
    </main>
  );
}
