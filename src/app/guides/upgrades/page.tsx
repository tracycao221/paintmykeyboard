import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Upgrade Guide ({Month} {Year}) - Paints, Roller & Cash`,
  description: `${siteConfig.gameName} upgrade guide for {Month} {Year}, with source-safe paint, roller, cash, and expansion priorities.`,
  alternates: { canonical: `${siteConfig.domain}/guides/upgrades` }
};

export default function UpgradeGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Upgrade Guide", href: "/guides/upgrades" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Upgrades", href: "/guides/upgrades" }]} />
      <PageIntro eyebrow="Upgrades" title={`${siteConfig.gameName} Upgrade Guide`} description="Better paints, roller upgrades, and keyboard expansion are confirmed. Exact best order waits on costs, stats, and in-game testing." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Paints</span><h2 className="mt-3 text-xl font-bold text-white">Cash value focus</h2><p className="mt-2 text-sm leading-6 text-white/65">Check paints when your goal is stronger value from painted keys.</p></article>
        <article className="content-card"><span className="mini-label">Roller</span><h2 className="mt-3 text-xl font-bold text-white">Speed focus</h2><p className="mt-2 text-sm leading-6 text-white/65">Check roller upgrades when painting speed feels like the bottleneck.</p></article>
        <article className="content-card"><span className="mini-label">Keyboard</span><h2 className="mt-3 text-xl font-bold text-white">Growth focus</h2><p className="mt-2 text-sm leading-6 text-white/65">Check expansion when your current keyboard no longer gives enough room to grow.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Compare priorities" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/tier-list">Tier list</Link><Link className="button-secondary" href="/wiki/paints">Paints</Link><Link className="button-secondary" href="/wiki/roller">Roller</Link></div>
    </main>
  );
}
