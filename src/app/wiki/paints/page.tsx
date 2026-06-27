import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Paints Guide ({Month} {Year}) - Better Paints Status`,
  description: `${siteConfig.gameName} paints guide for {Month} {Year}, with verified unlock notes and pending paint tier data.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/paints` }
};

export default function PaintsWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Paints", href: "/wiki/paints" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Paints", href: "/wiki/paints" }]} />
      <PageIntro eyebrow="Wiki" title={`${siteConfig.gameName} Paints Guide`} description="Better paints are confirmed by the Roblox description, but named paint tiers, costs, and multipliers still need live checking." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Confirmed</span><h2 className="mt-3 text-xl font-bold text-white">Better paints exist</h2><p className="mt-2 text-sm leading-6 text-white/65">The official Roblox description says players can unlock better paints.</p></article>
        <article className="content-card"><span className="mini-label">Needs data</span><h2 className="mt-3 text-xl font-bold text-white">Paint tiers</h2><p className="mt-2 text-sm leading-6 text-white/65">Do not treat any named tier, price, or multiplier as final until checked in-game.</p></article>
        <article className="content-card"><span className="mini-label">Next step</span><h2 className="mt-3 text-xl font-bold text-white">Compare with roller</h2><p className="mt-2 text-sm leading-6 text-white/65">Use the upgrade guide before deciding whether paint or roller upgrades help more.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Keep planning" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/guides/upgrades">Upgrade guide</Link><Link className="button-secondary" href="/tier-list">Tier list</Link><Link className="button-secondary" href="/sources">Sources</Link></div>
    </main>
  );
}
