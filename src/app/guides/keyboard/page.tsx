import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Expansion Guide ({Month} {Year}) - Bigger Keyboard Tips`,
  description: `Learn ${siteConfig.gameName} expansion basics for {Month} {Year}, including bigger keyboard goals and what needs checking.`,
  alternates: { canonical: `${siteConfig.domain}/guides/keyboard` }
};

export default function KeyboardGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Keyboard Expansion", href: "/guides/keyboard" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Keyboard", href: "/guides/keyboard" }]} />
      <PageIntro eyebrow="Expansion" title={`${siteConfig.gameName} Keyboard Expansion Guide`} description="Build toward a bigger keyboard, but compare expansion costs against cash speed and upgrade value before treating it as the next best buy." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Goal</span><h2 className="mt-3 text-xl font-bold text-white">Build the biggest keyboard</h2><p className="mt-2 text-sm leading-6 text-white/65">The official description frames bigger keyboard progress as a core goal.</p></article>
        <article className="content-card"><span className="mini-label">Compare</span><h2 className="mt-3 text-xl font-bold text-white">Expansion versus upgrades</h2><p className="mt-2 text-sm leading-6 text-white/65">If expansion is expensive, paint or roller upgrades may help you reach it faster.</p></article>
        <article className="content-card"><span className="mini-label">Check</span><h2 className="mt-3 text-xl font-bold text-white">Record costs first</h2><p className="mt-2 text-sm leading-6 text-white/65">Do not publish exact expansion order until costs and area names are verified.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Expansion resources" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/wiki/keyboard">Keyboard wiki</Link><Link className="button-secondary" href="/calculator">Calculator</Link><Link className="button-secondary" href="/guides/cash">Cash guide</Link></div>
    </main>
  );
}
