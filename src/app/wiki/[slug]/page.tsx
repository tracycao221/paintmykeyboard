import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { getLongTailPage, longTailCanonical, wikiLongTailPages } from "@/data/long-tail";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return wikiLongTailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLongTailPage("wiki", slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: longTailCanonical(page) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: longTailCanonical(page),
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function WikiLongTailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLongTailPage("wiki", slug);
  if (!page) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: page.title, href: `/wiki/${page.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: page.intent, href: `/wiki/${page.slug}` }]} />

      <PageIntro eyebrow={page.eyebrow} title={page.title} description={page.intro}>
        <div className="flex flex-wrap gap-3">
          <Link className="button-secondary" href="/wiki">Wiki hub</Link>
          <Link className="button-secondary" href="/guides">Guides</Link>
          <Link className="button-secondary" href="/sources">Sources</Link>
        </div>
      </PageIntro>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        {page.sections.map((section) => (
          <article key={section.title} className="content-card">
            <span className="mini-label">{page.intent}</span>
            <h2 className="mt-3 text-2xl font-bold text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">{section.body}</p>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/64">
              {section.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="content-card">
          <SectionHeader eyebrow="FAQ" title={`${page.intent} questions`} copy={`Source-safe answers for ${siteConfig.gameName} players comparing colors, paints, upgrades, and keyboard design choices.`} />
          <div className="mt-5 grid gap-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-white/10 bg-black/20 p-4">
                <summary className="cursor-pointer text-base font-bold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-white/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <aside className="content-card">
          <span className="mini-label">Internal links</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Related long-tail pages</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">These pages connect the wiki topic to practical guide searches, color planning, and upgrade decisions.</p>
          <div className="mt-5 grid gap-3">
            {page.related.map((item) => (
              <Link key={item.href} href={item.href} className="row-link">
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.href}</small>
                </span>
                <span aria-hidden="true">-&gt;</span>
              </Link>
            ))}
            <Link href="/guides/faq" className="row-link">
              <span>
                <strong>FAQ</strong>
                <small>/guides/faq</small>
              </span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
