import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Cash Guide ({Month} {Year}) - Money And Income Notes`,
  description: `${siteConfig.gameName} cash wiki for {Month} {Year}, explaining verified cash basics and formula data still being checked.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/cash` }
};

export default function CashWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Cash", href: "/wiki/cash" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Cash", href: "/wiki/cash" }]} />
      <PageIntro eyebrow="Wiki" title={`${siteConfig.gameName} Cash Guide`} description="Cash from painted keys is verified. Exact income formulas, boosts, and upgrade multipliers still need checking." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Confirmed</span><h2 className="mt-3 text-xl font-bold text-white">Painted keys pay cash</h2><p className="mt-2 text-sm leading-6 text-white/65">The official Roblox description says cash comes from painted keys.</p></article>
        <article className="content-card"><span className="mini-label">Use it for</span><h2 className="mt-3 text-xl font-bold text-white">Progress choices</h2><p className="mt-2 text-sm leading-6 text-white/65">Cash likely funds paints, roller upgrades, and keyboard expansion.</p></article>
        <article className="content-card"><span className="mini-label">Needs data</span><h2 className="mt-3 text-xl font-bold text-white">Income rate</h2><p className="mt-2 text-sm leading-6 text-white/65">Use your own cash-per-minute in the calculator until formulas are verified.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Use cash wisely" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/guides/cash">Cash guide</Link><Link className="button-secondary" href="/calculator">Calculator</Link><Link className="button-secondary" href="/wiki/keyboard">Keyboard expansion</Link></div>
    </main>
  );
}
