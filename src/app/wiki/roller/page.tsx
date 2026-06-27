import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Roller Upgrades ({Month} {Year}) - Upgrade Status`,
  description: `${siteConfig.gameName} roller upgrade guide for {Month} {Year}, with source-safe notes on speed, upgrades, and data gaps.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/roller` }
};

export default function RollerWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Roller", href: "/wiki/roller" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Roller", href: "/wiki/roller" }]} />
      <PageIntro eyebrow="Wiki" title={`${siteConfig.gameName} Roller Upgrades`} description="Roller upgrades are confirmed, but speed, coverage, and upgrade cost values still need verification." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Confirmed</span><h2 className="mt-3 text-xl font-bold text-white">Upgrade your roller</h2><p className="mt-2 text-sm leading-6 text-white/65">The official Roblox description names roller upgrades as part of the core loop.</p></article>
        <article className="content-card"><span className="mini-label">Best use</span><h2 className="mt-3 text-xl font-bold text-white">Painting speed</h2><p className="mt-2 text-sm leading-6 text-white/65">Treat roller upgrades as a speed focus until exact stats prove a different priority.</p></article>
        <article className="content-card"><span className="mini-label">Needs data</span><h2 className="mt-3 text-xl font-bold text-white">Costs and stats</h2><p className="mt-2 text-sm leading-6 text-white/65">Record prices and visible stat changes before publishing exact recommendations.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Plan the next upgrade" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/calculator">Calculator</Link><Link className="button-secondary" href="/guides/upgrades">Upgrade guide</Link><Link className="button-secondary" href="/wiki/paints">Paints</Link></div>
    </main>
  );
}
