import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Calculator ({Month} {Year}) - Cash & Upgrade Planner`,
  description: `Use the ${siteConfig.gameName} calculator for {Month} {Year} to plan cash, upgrades, roller focus, and keyboard expansion.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` },
  openGraph: {
    title: `${siteConfig.gameName} Calculator ({Month} {Year})`,
    description: `Use the ${siteConfig.gameName} calculator for {Month} {Year} to plan cash, upgrades, roller focus, and keyboard expansion.`,
    url: `${siteConfig.domain}/calculator`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Calculator ({Month} {Year})`,
    description: `Use the ${siteConfig.gameName} calculator for {Month} {Year} to plan cash, upgrades, roller focus, and keyboard expansion.`,
    images: ["/opengraph-image"]
  }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Cash and Upgrade Calculator`}
        description="Plan cash, better paints, roller upgrades, and keyboard expansion with your own observed numbers while exact formulas are still being checked."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
