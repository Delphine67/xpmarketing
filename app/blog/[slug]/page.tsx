import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles, getArticleBySlug } from "../data";

const BRAND = {
  orange: "#ED6924",
  blueGray: "#2C5C7A",
  lightGray: "#DBDBDB",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article introuvable | XPMarketing",
    };
  }

  return {
    title: `${article.title} | XPMarketing`,
    description: article.seoDescription,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section
        className="px-6 py-16 md:py-20"
        style={{ background: BRAND.lightGray }}
      >
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex text-sm font-semibold mb-5"
            style={{ color: BRAND.orange }}
          >
            ← Retour au blog
          </Link>

          <p
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: BRAND.blueGray }}
          >
            Article de blog
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-[1.08] max-w-4xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-black/55">
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
            <span>•</span>
            <span>Par {article.author}</span>
          </div>

          <p className="mt-8 text-lg md:text-[22px] text-black/75 leading-[1.7] max-w-4xl">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <article className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* INTRO */}
          <div className="mt-14 md:mt-16">
            {article.intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-[18px] md:text-[21px] leading-[1.9] text-black/80"
                style={{ marginBottom: index === article.intro.length - 1 ? 0 : "2rem" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* SECTIONS */}
          <div className="mt-20 md:mt-24">
            {article.sections.map((section, sectionIndex) => (
              <section
                key={section.title}
                style={{
                  marginTop: sectionIndex === 0 ? "0" : "5rem",
                }}
              >
                {/* Trait + titre */}
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    className="w-16 h-1 rounded-full"
                    style={{ background: BRAND.orange }}
                  />
                </div>

                <h2
                  className="text-2xl md:text-[34px] font-bold leading-[1.2] max-w-4xl"
                  style={{ marginBottom: "2rem" }}
                >
                  {section.title}
                </h2>

                {/* Paragraphes */}
                <div>
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[18px] md:text-[21px] leading-[1.9] text-black/80"
                      style={{ marginBottom: index === section.paragraphs.length - 1 ? 0 : "1.75rem" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Liste */}
                {section.bullets && (
                  <ul
                    className="pl-7 list-disc text-[18px] md:text-[21px] leading-[1.9] text-black/80 marker:text-[#ED6924]"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                  >
                    {section.bullets.map((bullet) => (
                      <li key={bullet} style={{ marginBottom: "0.75rem" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* CONCLUSION */}
          <section
            className="mt-20 md:mt-24 rounded-3xl p-8 md:p-10"
            style={{
              background: "#F7F7F7",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: BRAND.blueGray }}
            >
              En conclusion
            </p>

            <div style={{ marginTop: "1.5rem" }}>
              {article.conclusion.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[18px] md:text-[21px] leading-[1.9] text-black/80"
                  style={{ marginBottom: index === article.conclusion.length - 1 ? 0 : "1.75rem" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 rounded-3xl bg-black text-white p-8 md:p-10">
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: BRAND.orange }}
            >
              Besoin d’aller plus loin ?
            </p>

            <p className="mt-4 text-[18px] md:text-[20px] leading-[1.8] text-white/85">
              {article.cta}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 text-white font-semibold transition hover:opacity-95"
                style={{ background: BRAND.orange }}
              >
                Faire le point
              </Link>

              <Link
                href="/offres"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border border-white transition hover:bg-white hover:text-black"
              >
                Voir les offres
              </Link>
            </div>
          </section>

          {/* SIGNATURE */}
          <div className="mt-12 border-t border-black/10 pt-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-black/45">
              Article signé
            </p>
            <p className="mt-2 text-lg font-semibold">Delphine Ravet</p>
            <p className="text-black/65">
              Consultante en marketing externalisé pour PME
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}