import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Keyboard Expansion ({Month} {Year}) - Keys Guide`,
  description: `${siteConfig.gameName} keyboard expansion guide for {Month} {Year}, including verified goals and unverified cost details.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/keyboard` }
};

export default function KeyboardWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Keyboard Expansion", href: "/wiki/keyboard" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Keyboard", href: "/wiki/keyboard" }]} />
      <PageIntro eyebrow="Wiki" title={`${siteConfig.gameName} Keyboard Expansion`} description="Keyboard expansion is verified by the official description. Costs, area names, and exact value still need live data." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Confirmed</span><h2 className="mt-3 text-xl font-bold text-white">Expand the keyboard</h2><p className="mt-2 text-sm leading-6 text-white/65">The official Roblox description makes bigger keyboard progress part of the game goal.</p></article>
        <article className="content-card"><span className="mini-label">When to check</span><h2 className="mt-3 text-xl font-bold text-white">After cash upgrades</h2><p className="mt-2 text-sm leading-6 text-white/65">Expansion should be compared with paint and roller upgrades once costs are visible.</p></article>
        <article className="content-card"><span className="mini-label">Needs data</span><h2 className="mt-3 text-xl font-bold text-white">Expansion order</h2><p className="mt-2 text-sm leading-6 text-white/65">Do not publish exact order or prices until the in-game upgrade path is checked.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Expansion planning" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/guides/keyboard">Expansion guide</Link><Link className="button-secondary" href="/calculator">Calculator</Link><Link className="button-secondary" href="/wiki/cash">Cash</Link></div>
    </main>
  );
}
