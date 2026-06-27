import type { Metadata } from "next";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { siteLaunchDate } from "@/lib/site-date";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes ({Month} {Year}) - Working Code Tracker`,
  description: `Checked ${siteConfig.gameName} codes for {Month} {Year}. See active, expired, and needs-check code status without fake rewards.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes ({Month} {Year})`,
    description: `Checked ${siteConfig.gameName} codes for {Month} {Year}. See active, expired, and needs-check code status without fake rewards.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes ({Month} {Year})`,
    description: `Checked ${siteConfig.gameName} codes for {Month} {Year}. See active, expired, and needs-check code status without fake rewards.`,
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow={`Last checked ${siteLaunchDate}`}
        title={`${siteConfig.gameName} Codes ({Month} {Year})`}
        description="No working Paint My Keyboard codes are verified yet. This tracker only lists rewards after they are checked against reliable sources or live in-game testing."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active codes"
          title="No verified active codes yet"
          copy="If a code appears on Roblox, Discord, YouTube, or a community tracker, keep it marked needs-check until the reward is confirmed."
        />
        {activeCodes.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {activeCodes.map((code) => (
              <article key={code.code} className="content-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                  <span className="status-pill">{code.status}</span>
                </div>
                <p className="mt-3 text-white/70">{code.reward}</p>
                <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
              </article>
            ))}
          </div>
        ) : (
          <article className="content-card mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="status-pill">Needs check</span>
              <span className="text-sm font-semibold text-white/55">Active code list is empty by design.</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-white/75">
              We did not verify any active Paint My Keyboard codes during the latest source pass. New claims should be checked against the official Roblox page, verified creator channels, or live redemption before they appear here.
            </p>
          </article>
        )}
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expired codes"
          title="No expired codes verified"
          copy="Expired-code history will be added only after a previously verified code stops working."
        />
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="Paint My Keyboard code redemption has not been verified yet, so use this as a safe checklist until the live UI is checked."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Find the Codes, Rewards, Shop, or Settings panel.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Code freshness policy"
            copy="Codes should show the date checked, source type, and conflict notes when trackers disagree. This page will not publish unverified reward claims."
          />
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="Code questions" />
        <div className="mt-5 grid gap-3">
          {faqs.codes.map((item) => (
            <details key={item.q} className="content-card">
              <summary className="cursor-pointer text-base font-bold text-white">{item.q}</summary>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
