import type { Metadata } from "next";
import Link from "next/link";
import { getOeuvresByAuthor } from "@/lib/data/oeuvres";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Lectures";
const description =
  "Les œuvres et auteurs mobilisés pendant le Rallye Vélo Louis Guilloux, et les étapes où ils sont lus.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/lectures",
  }),
};

const authorNote: Record<string, string> = {
  "Louis Guilloux":
    "Écrivain briochin, dont les romans et textes autobiographiques irriguent la majorité des étapes du rallye.",
  "Georges Palante":
    "Philosophe individualiste, professeur au lycée Anatole Le Braz et ami de jeunesse de Louis Guilloux.",
  "Mona Ozouf":
    "Ancienne élève de Renée Guilloux au collège Ernest Renan.",
  "Albert Camus":
    "Ami de Louis Guilloux ; son père est enterré au cimetière Saint-Michel de Saint-Brieuc.",
};

export default function LecturesPage() {
  const groups = getOeuvresByAuthor();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Lectures
      </h1>
      <p
        className="text-lg leading-relaxed mb-10"
        style={{ color: "var(--ink-light)" }}
      >
        Les œuvres et auteurs mobilisés pendant le rallye, et les étapes où
        ils sont lus. Pour l&apos;itinéraire inverse — d&apos;un lieu vers ses
        textes — voir la page{" "}
        <Link
          href="/etapes"
          className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Étapes
        </Link>
        .
      </p>

      <div className="flex flex-col gap-12">
        {groups.map(({ author, oeuvres }) => (
          <section key={author}>
            <h2
              className="text-2xl mb-1"
              style={{ color: "var(--ink)" }}
            >
              {author}
            </h2>
            {authorNote[author] && (
              <p
                className="text-sm font-sans mb-6"
                style={{ color: "var(--stone)" }}
              >
                {authorNote[author]}
              </p>
            )}

            <div className="flex flex-col gap-6">
              {oeuvres.map((oeuvre) => {
                const hasExtract = oeuvre.extraits.length > 0;
                const allEtapes = [
                  ...oeuvre.extraits.map((r) => ({ ...r, hasExtract: true })),
                  ...oeuvre.referencesSansExtrait.map((r) => ({
                    ...r,
                    hasExtract: false,
                  })),
                ];

                return (
                  <article
                    key={`${oeuvre.author}::${oeuvre.work}`}
                    className="border rounded-xl p-5 sm:p-6"
                    style={{ borderColor: "var(--frame)" }}
                  >
                    <h3
                      className="text-lg mb-1"
                      style={{ color: "var(--ink)", fontStyle: "italic" }}
                    >
                      {oeuvre.work}
                    </h3>
                    {oeuvre.edition && (
                      <p
                        className="font-sans text-sm mb-3"
                        style={{ color: "var(--stone)" }}
                      >
                        {oeuvre.edition}
                      </p>
                    )}
                    {oeuvre.presentation && (
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--ink-light)" }}
                      >
                        {oeuvre.presentation}
                      </p>
                    )}

                    <p
                      className="font-sans text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--stone)" }}
                    >
                      {hasExtract
                        ? `${oeuvre.extraits.length} extrait${
                            oeuvre.extraits.length > 1 ? "s" : ""
                          } publié${oeuvre.extraits.length > 1 ? "s" : ""}`
                        : "Aucun extrait publié pour l'instant"}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {allEtapes.map((ref) => (
                        <li key={ref.etapeSlug}>
                          <Link
                            href={`/etapes/${ref.etapeSlug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-sans transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            style={{
                              background: ref.hasExtract
                                ? "var(--accent-bg)"
                                : "var(--muted)",
                              color: ref.hasExtract
                                ? "var(--accent)"
                                : "var(--ink-light)",
                            }}
                          >
                            {ref.etapeTitle}
                            {ref.pages && (
                              <span style={{ color: "var(--stone)" }}>
                                p. {ref.pages}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 border-t pt-8" style={{ borderColor: "var(--frame)" }}>
        <Link
          href="/louis-guilloux"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          ← Louis Guilloux
        </Link>
      </div>
    </div>
  );
}
