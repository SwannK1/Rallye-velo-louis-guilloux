import type { Metadata } from "next";
import Link from "next/link";
import { parcoursData } from "@/lib/data/parcours";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Parcours";
const description =
  "Deux parcours cyclistes proposés lors du Rallye Vélo Louis Guilloux du 20 septembre 2026 à Saint-Brieuc.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/parcours",
  }),
};

export default function ParcoursPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-2"
        style={{ color: "var(--ink)" }}
      >
        Les parcours
      </h1>
      <p
        className="font-sans text-sm mb-10"
        style={{ color: "var(--stone)" }}
      >
        Deux parcours cyclistes le 20 septembre 2026 à Saint-Brieuc.
      </p>

      <div className="flex flex-col gap-6">
        {parcoursData.map((parcours) => {
          const etapes = getEtapesByRouteId(parcours.id);
          return (
            <article
              key={parcours.id}
              className="border rounded-xl p-6"
              style={{ borderColor: "var(--frame)" }}
            >
              <h2 className="text-xl mb-2" style={{ color: "var(--ink)" }}>
                {parcours.name}
              </h2>

              <dl
                className="flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm mb-3"
                style={{ color: "var(--stone)" }}
              >
                <div className="flex gap-2">
                  <dt>Distance</dt>
                  <dd style={{ color: "var(--ink-light)" }}>
                    {parcours.distance}
                  </dd>
                </div>
                {parcours.route && (
                  <div className="flex gap-2">
                    <dt>Trajet</dt>
                    <dd style={{ color: "var(--ink-light)" }}>
                      {parcours.route}
                    </dd>
                  </div>
                )}
                {!parcours.route && parcours.location && (
                  <div className="flex gap-2">
                    <dt>Lieu</dt>
                    <dd style={{ color: "var(--ink-light)" }}>
                      {parcours.location}
                    </dd>
                  </div>
                )}
                <div className="flex gap-2">
                  <dt>{etapes.length} étapes</dt>
                </div>
              </dl>

              {parcours.description && (
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--ink-light)" }}
                >
                  {parcours.description}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={parcours.umapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-sans font-medium rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ background: "var(--accent)", color: "var(--paper)" }}
                >
                  Ouvrir la carte
                  <span className="sr-only">
                    {" "}(s&apos;ouvre dans un nouvel onglet)
                  </span>
                </a>
                <Link
                  href={`/parcours/${parcours.slug}`}
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-sans font-medium border rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    borderColor: "var(--frame)",
                    color: "var(--ink-light)",
                  }}
                >
                  Détails du parcours
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
