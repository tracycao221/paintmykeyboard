import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `How To Get Cash Fast In ${siteConfig.gameName} ({Month} {Year})`,
  description: `${siteConfig.gameName} cash guide for {Month} {Year}, covering painted keys, upgrades, player-entered estimates, and data gaps.`,
  alternates: { canonical: `${siteConfig.domain}/guides/cash` }
};

export default function CashGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Cash Guide", href: "/guides/cash" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Cash", href: "/guides/cash" }]} />
      <PageIntro eyebrow="Cash" title={`How To Get Cash Fast In ${siteConfig.gameName}`} description="Cash comes from painted keys. The safest early advice is to improve the next few minutes of painting while keeping exact formulas marked as unchecked." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">1</span><h2 className="mt-3 text-xl font-bold text-white">Keep painting keys</h2><p className="mt-2 text-sm leading-6 text-white/65">The verified source says painted keys produce cash. Do not assume extra multipliers until confirmed.</p></article>
        <article className="content-card"><span className="mini-label">2</span><h2 className="mt-3 text-xl font-bold text-white">Check upgrade cost</h2><p className="mt-2 text-sm leading-6 text-white/65">Compare your next paint, roller, or expansion price against your current cash pace.</p></article>
        <article className="content-card"><span className="mini-label">3</span><h2 className="mt-3 text-xl font-bold text-white">Use your own rate</h2><p className="mt-2 text-sm leading-6 text-white/65">Enter cash per minute into the calculator until a verified formula is available.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Plan cash choices" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/calculator">Calculator</Link><Link className="button-secondary" href="/wiki/cash">Cash wiki</Link><Link className="button-secondary" href="/guides/upgrades">Upgrades</Link></div>
    </main>
  );
}
