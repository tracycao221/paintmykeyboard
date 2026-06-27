import type { Metadata } from "next";
import Link from "next/link";
import { faqs, siteConfig, tierPreview } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Tier List ({Month} {Year}) - Best Upgrade Priorities`,
  description: `${siteConfig.gameName} tier list for {Month} {Year}, with role-first paint, roller, cash, and keyboard upgrade priorities.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: `${siteConfig.gameName} Tier List ({Month} {Year})`,
    description: `${siteConfig.gameName} tier list for {Month} {Year}, with role-first paint, roller, cash, and keyboard upgrade priorities.`,
    url: `${siteConfig.domain}/tier-list`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Tier List ({Month} {Year})`,
    description: `${siteConfig.gameName} tier list for {Month} {Year}, with role-first paint, roller, cash, and keyboard upgrade priorities.`,
    images: ["/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqs.tierList} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow="Tier list"
        title={`${siteConfig.gameName} Tier List ({Month} {Year})`}
        description="Use this role-first list to compare cash, paints, roller upgrades, and keyboard expansion without pretending exact upgrade math is verified."
      />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">{siteConfig.lastUpdated}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Rankings should be refreshed after codes, updates, balance changes, or repeated community reports.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Cash, speed, cost, and growth</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Compare choices by cash impact, painting speed, unlock cost, expansion value, and how much data is still missing.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Roblox first, then checked reports</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Treat the official Roblox page as the strongest source. Videos and community reports are only trend clues until cross-checked.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Rankings"
          title="Best current upgrade priorities"
          copy="Compare beginner cash, better paints, roller upgrades, and keyboard expansion with clear notes about what still needs checking."
        />
        <div className="mt-6 grid gap-4">
          {tierPreview.map((item) => (
            <article key={item.name} className="content-card">
              <div className="flex flex-wrap items-center gap-4">
                <span className="tier-badge">{item.tier}</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{item.name}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.role}</p>
                </div>
                {item.confidence ? <span className="status-pill">{item.confidence}</span> : null}
              </div>
              {item.bestFor?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bestFor.map((label) => (
                    <span key={label} className="mini-label">{label}</span>
                  ))}
                </div>
              ) : null}
              <p className="mt-4 max-w-4xl text-white/68">{item.reason}</p>
              {item.teamNote ? <p className="mt-3 text-sm text-white/60">Team combo: {item.teamNote}</p> : null}
              {item.sourceNote ? <p className="mt-2 text-xs uppercase tracking-wide text-white/45">Source check: {item.sourceNote}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Beginner ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Start with verified basics: paint keys, earn cash, and avoid chasing unverified upgrade claims.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Cash ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Compare choices by whether they improve cash from painted keys or reduce time between upgrades.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Expansion ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Treat keyboard expansion as a growth choice that needs cost and income data before exact ranking.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Source boundary"
          title="No exact S/A/B upgrade math yet"
          copy="Paint My Keyboard is not verified as a character, unit, or team game. This page ranks progress goals until named upgrade data is checked."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/guides" className="content-card">
            <span className="mini-label">Guides</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read upgrade basics</h3>
            <p className="mt-2 text-sm text-white/66">Use guides for cash, paints, roller upgrades, and keyboard expansion before exact data is available.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read mechanic details</h3>
            <p className="mt-2 text-sm text-white/66">Use wiki pages for paints, roller, cash, and keyboard expansion notes.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Sources</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check evidence</h3>
            <p className="mt-2 text-sm text-white/66">Use source notes when creator videos, wiki pages, or community reports disagree.</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Get codes</Link>
        <Link href="/calculator" className="button-secondary">Use the calculator</Link>
        <Link href="/trello" className="button-secondary">Check source status</Link>
      </div>
    </main>
  );
}
