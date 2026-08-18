import type { Metadata } from "next";
import Link from "next/link";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import { parcoursData } from "@/lib/data/parcours";
import EtapeThumb from "@/components/EtapeThumb";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Étapes";
const description =
  "Les étapes du Rallye Vélo Louis Guilloux, réparties entre le parcours du matin et celui de l'après-midi.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/etapes",
  }),
};

export default function EtapesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-2"
        style={{ color: "var(--ink)" }}
      >
        Les étapes
      </h1>
      <p
        className="font-sans text-sm mb-12"
        style={{ color: "var(--stone)" }}
      >
        Le parcours se déroule en deux temps : un parcours du matin dans
        Saint-Brieuc, un parcours de l&apos;après-midi vers Hillion.
      </p>

      <div className="space-y-12">
        {parcoursData.map((parcours) => {
          const etapes = getEtapesByRouteId(parcours.id);
          return (
            <section key={parcours.id}>
              <div className="flex items-baseline gap-4 mb-5">
                <h2
                  className="text-xl"
                  style={{ color: "var(--ink)" }}
                >
                  {parcours.name}
                </h2>
                <span
                  className="text-sm font-sans"
                  style={{ color: "var(--stone)" }}
                >
                  {parcours.distance}
                  {parcours.route && ` · ${parcours.route}`}
                  {!parcours.route && parcours.location && ` · ${parcours.location}`}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {etapes.map((etape) => (
                  <li key={etape.id}>
                    <Link
                      href={`/etapes/${etape.slug}`}
                      className="card-link flex items-center gap-4 px-4 py-4 border rounded-xl group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        borderColor: "var(--frame)",
                      }}
                    >
                      <EtapeThumb etape={etape} />
                      {etape.order !== undefined && (
                        <span
                          className="w-6 h-6 flex-shrink-0 text-xs flex items-center justify-center rounded-full font-sans font-medium"
                          style={{
                            background: "var(--muted)",
                            color: "var(--stone)",
                          }}
                        >
                          {etape.order}
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <span
                          className="font-sans font-medium text-sm"
                          style={{ color: "var(--ink)" }}
                        >
                          {etape.title}
                        </span>
                        {etape.theme && (
                          <p
                            className="text-xs font-sans mt-0.5 truncate"
                            style={{ color: "var(--stone)" }}
                          >
                            {etape.theme}
                          </p>
                        )}
                      </div>
                      <span
                        className="font-sans text-sm ml-2 flex-shrink-0"
                        style={{ color: "var(--stone)" }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <a
                  href={parcours.umapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                  style={{ color: "var(--accent)" }}
                >
                  Voir la carte de ce parcours →
                  <span className="sr-only">
                    {" "}(s&apos;ouvre dans un nouvel onglet)
                  </span>
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
