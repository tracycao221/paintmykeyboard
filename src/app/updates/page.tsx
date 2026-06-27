import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Update ({Month} {Year}) - Events And Patch Watch`,
  description: `Track ${siteConfig.gameName} updates for {Month} {Year}, including Roblox changes, event watch notes, and verified source status.`,
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `${siteConfig.gameName} Update ({Month} {Year})`,
    description: `Track ${siteConfig.gameName} updates for {Month} {Year}, including Roblox changes, event watch notes, and verified source status.`,
    url: `${siteConfig.domain}/updates`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Update ({Month} {Year})`,
    description: `Track ${siteConfig.gameName} updates for {Month} {Year}, including Roblox changes, event watch notes, and verified source status.`,
    images: ["/opengraph-image"]
  }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro eyebrow="Update watch" title={`${siteConfig.gameName} Updates`} description="Use this page to track source-checked game changes, event claims, and code-drop signals without treating rumors as patch notes." />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Roblox</span><h2 className="mt-3 text-xl font-bold text-white">Primary source</h2><p className="mt-2 text-sm leading-6 text-white/65">Check the official Roblox page for title, description, and public availability changes.</p></article>
        <article className="content-card"><span className="mini-label">Codes</span><h2 className="mt-3 text-xl font-bold text-white">Reward watch</h2><p className="mt-2 text-sm leading-6 text-white/65">New codes often appear near updates, but every reward claim must be verified before publishing.</p></article>
        <article className="content-card"><span className="mini-label">Events</span><h2 className="mt-3 text-xl font-bold text-white">Needs confirmation</h2><p className="mt-2 text-sm leading-6 text-white/65">No named Paint My Keyboard event is verified yet. Add event sections only after source checks.</p></article>
      </section>
      <SectionHeader eyebrow="Related" title="Check source-sensitive pages" />
      <div className="mt-5 flex flex-wrap gap-3"><Link className="button-secondary" href="/codes">Codes</Link><Link className="button-secondary" href="/trello">Source status</Link><Link className="button-secondary" href="/sources">Sources</Link></div>
    </main>
  );
}
