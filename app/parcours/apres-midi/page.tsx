import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getParcoursById } from "@/lib/data/parcours";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import EtapeThumb from "@/components/EtapeThumb";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_NAME } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

const title = "Parcours de l'après-midi";
const description =
  "Environ 30 km de Saint-Brieuc à Hillion sur la Vélomaritime, sur les pas de Georges Palante.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/parcours/apres-midi",
    image: {
      url: "/images/lieux/hillion-eglise-contemporaine.jpg",
      alt: "Photographie contemporaine de l'église Saint-Jean-Baptiste d'Hillion.",
    },
  }),
};

export default function ParcoursApresMidi() {
  const parcours = getParcoursById("apres-midi");
  if (!parcours) notFound();
  const etapes = getEtapesByRouteId("apres-midi");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Parcours", path: "/parcours" },
          { name: parcours.name, path: "/parcours/apres-midi" },
        ])}
      />
      <nav aria-label="Fil d'Ariane" className="mb-8">
        <Link
          href="/parcours"
          className="inline-block py-1 -my-1 text-sm font-sans transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: "var(--stone)" }}
        >
          ← Tous les parcours
        </Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl mb-2" style={{ color: "var(--ink)" }}>
        {parcours.name}
      </h1>

      <dl
        className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm mb-8"
        style={{ color: "var(--stone)" }}
      >
        <div className="flex gap-2">
          <dt>Distance</dt>
          <dd style={{ color: "var(--ink-light)" }}>{parcours.distance}</dd>
        </div>
        {parcours.route && (
          <div className="flex gap-2">
            <dt>Trajet</dt>
            <dd style={{ color: "var(--ink-light)" }}>{parcours.route}</dd>
          </div>
        )}
      </dl>

      {parcours.description && (
        <p className="leading-relaxed mb-8" style={{ color: "var(--ink-light)" }}>
          {parcours.description}
        </p>
      )}

      {/* Carte */}
      <div className="mb-10">
        <a
          href={parcours.umapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-sans font-medium rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ background: "var(--accent)", color: "var(--paper)" }}
        >
          Ouvrir la carte du parcours
          <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
        </a>
      </div>

      {/* Étapes */}
      <section>
        <h2
          className="text-sm font-sans font-medium tracking-widest uppercase mb-5"
          style={{ color: "var(--stone)" }}
        >
          Les {etapes.length} étapes
        </h2>
        <ol className="flex flex-col gap-2">
          {etapes.map((etape) => (
            <li key={etape.id}>
              <Link
                href={`/etapes/${etape.slug}`}
                className="card-link flex items-center gap-4 px-4 py-4 border rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ borderColor: "var(--frame)" }}
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
        </ol>
      </section>

      {/* Navigation */}
      <div
        className="mt-12 border-t pt-8"
        style={{ borderColor: "var(--frame)" }}
      >
        <Link
          href="/parcours/matin"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          ← Parcours du matin
        </Link>
      </div>
    </div>
  );
}
