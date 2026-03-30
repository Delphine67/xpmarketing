import Link from "next/link";
import { blogArticles } from "./data";

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

export default function BlogPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section
        className="px-6 py-16 md:py-20"
        style={{ background: BRAND.lightGray }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: BRAND.blueGray }}
          >
            Blog XPMarketing
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Des conseils concrets pour structurer votre marketing et développer votre activité
          </h1>

          <p className="mt-6 text-lg text-black/75 max-w-2xl leading-relaxed">
            Des contenus simples, directement applicables, pensés pour les PME.
            Pas de théorie inutile : uniquement ce qui vous aide à y voir plus clair et à avancer.
          </p>
        </div>
      </section>

      {/* LISTE ARTICLES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl border border-black/10 bg-[#F7F7F7] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* TAG + TEMPS */}
              <div className="flex items-center justify-between text-sm">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ background: "#FCE8DD", color: BRAND.orange }}
                >
                  Conseil PME
                </span>

                <span className="text-black/60">
                  {article.readingTime}
                </span>
              </div>

              {/* DATE */}
              <p className="mt-4 text-sm text-black/55">
                {formatDate(article.date)}
              </p>

              {/* TITRE */}
              <h2 className="mt-4 text-2xl font-bold leading-snug group-hover:underline">
                {article.title}
              </h2>

              {/* TEXTE */}
              <p className="mt-4 text-black/75 leading-relaxed">
                {article.excerpt}
              </p>

              {/* CTA */}
              <Link
                href={`/blog/${article.slug}`}
                className="mt-6 inline-flex font-semibold"
                style={{ color: BRAND.orange }}
              >
                Lire l’article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAS */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-3xl bg-black text-white p-10 text-center">
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: BRAND.orange }}
          >
            Besoin d’aller plus loin ?
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold">
            Vous voulez structurer votre marketing et obtenir des résultats concrets ?
          </h2>

          <p className="mt-4 text-white/75">
            Un premier échange permet souvent de clarifier rapidement vos priorités.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex px-6 py-3 rounded-xl font-semibold text-white"
            style={{ background: BRAND.orange }}
          >
            Faire le point
          </Link>
        </div>
      </section>
    </main>
  );
}