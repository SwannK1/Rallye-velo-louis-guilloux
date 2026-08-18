import type { Metadata } from "next";
import Link from "next/link";
import { getChronologieSorted } from "@/lib/data/chronologie";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_NAME } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

const title = "Chronologie — Louis Guilloux";
const description =
  "Repères chronologiques attestés : Louis Guilloux, Georges Palante, Renée Guilloux et l'histoire de Saint-Brieuc.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/louis-guilloux/chronologie",
  }),
};

const categoryLabels: Record<string, string> = {
  biographie: "Biographie",
  oeuvre: "Œuvre",
  rencontre: "Rencontre",
  historique: "Événement historique",
  posterite: "Postérité",
};

export default function ChronologiePage() {
  const entries = getChronologieSorted();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Louis Guilloux", path: "/louis-guilloux" },
          { name: "Chronologie", path: "/louis-guilloux/chronologie" },
        ])}
      />
      <Link
        href="/louis-guilloux"
        className="text-sm font-sans font-medium mb-6 inline-block py-1 -my-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
        style={{ color: "var(--accent)" }}
      >
        ← Louis Guilloux
      </Link>

      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Chronologie
      </h1>
      <p
        className="text-lg italic mb-10 leading-relaxed"
        style={{ color: "var(--ink-light)" }}
      >
        Dates biographiques, publications et événements liés à Louis
        Guilloux, Georges Palante, Renée Guilloux et à l&apos;histoire de
        Saint-Brieuc — attestés par le corpus de préparation du parcours.
        Aucune date n&apos;a été déduite ni estimée.
      </p>

      <ol className="space-y-8">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="border-l-2 pl-5 py-1"
            style={{ borderColor: "var(--accent)" }}
          >
            <div className="flex items-baseline gap-3 flex-wrap mb-1">
              <p
                className="text-sm font-sans font-medium tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                {entry.yearLabel ?? entry.year}
              </p>
              <p
                className="text-xs font-sans uppercase tracking-wider"
                style={{ color: "var(--stone)" }}
              >
                {categoryLabels[entry.category]}
              </p>
            </div>
            <p className="font-medium mb-1" style={{ color: "var(--ink)" }}>
              {entry.title}
            </p>
            <p
              className="leading-relaxed mb-2"
              style={{ color: "var(--ink-light)" }}
            >
              {entry.description}
            </p>
            <p className="text-xs font-sans" style={{ color: "var(--stone)" }}>
              Source : {entry.sourceNote}
              {entry.sourceDocument ? ` (${entry.sourceDocument})` : ""}
            </p>
            {entry.etapeSlug && (
              <Link
                href={`/etapes/${entry.etapeSlug}`}
                className="text-sm font-sans font-medium mt-2 inline-block py-1 -my-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                style={{ color: "var(--accent)" }}
              >
                Voir l&apos;étape →
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
