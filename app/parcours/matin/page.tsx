import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getParcoursById } from "@/lib/data/parcours";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import EtapeThumb from "@/components/EtapeThumb";
import JsonLd from "@/components/JsonLd";
import Pill from "@/components/Pill";
import RouteDivider from "@/components/RouteDivider";
import UMapEmbed from "@/components/UMapEmbed";
import { pageMetadata, SITE_NAME } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

const title = "Parcours du matin";
const description =
  "13 km dans Saint-Brieuc sur les traces de Louis Guilloux, de la gare à la Villa Rohannec'h.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/parcours/matin",
    image: {
      url: "/images/lieux/gare-saint-brieuc-contemporaine.jpg",
      alt: "Photographie contemporaine de la façade de la gare de Saint-Brieuc.",
    },
  }),
};

export default function ParcoursMatin() {
  const parcours = getParcoursById("matin");
  if (!parcours) notFound();
  const etapes = getEtapesByRouteId("matin");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Parcours", path: "/parcours" },
          { name: parcours.name, path: "/parcours/matin" },
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

      {parcours.ambiance && (
        <Pill tone="accent" uppercase>
          {parcours.ambiance}
        </Pill>
      )}

      <dl
        className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm mb-8"
        style={{ color: "var(--stone)" }}
      >
        <div className="flex gap-2">
          <dt>Distance</dt>
          <dd style={{ color: "var(--ink-light)" }}>{parcours.distance}</dd>
        </div>
        {parcours.location && (
          <div className="flex gap-2">
            <dt>Lieu</dt>
            <dd style={{ color: "var(--ink-light)" }}>{parcours.location}</dd>
          </div>
        )}
      </dl>

      {parcours.description && (
        <p className="leading-relaxed mb-8" style={{ color: "var(--ink-light)" }}>
          {parcours.description}
        </p>
      )}

      {/* Image de couverture — cadrage plus resserré, registre architecture/patrimoine */}
      <figure className="mb-8">
        <div aria-hidden="true" className="h-2 rounded-t-xl motif-matin" />
        <div
          className="relative w-full overflow-hidden rounded-b-xl border border-t-0"
          style={{ borderColor: "var(--frame)", aspectRatio: "4 / 3" }}
        >
          <Image
            src="/images/lieux/gare-saint-brieuc-contemporaine.jpg"
            alt="Photographie contemporaine de la façade de la gare de Saint-Brieuc."
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            className="object-cover"
          />
        </div>
      </figure>

      {/* Carte */}
      <UMapEmbed
        umapUrl={parcours.umapUrl}
        title={`Carte du ${parcours.name.toLowerCase()}`}
        className="mb-10"
      />

      <RouteDivider className="mb-10" />

      {/* Étapes */}
      <section>
        <h2
          className="text-sm font-sans font-medium tracking-widest uppercase mb-5"
          style={{ color: "var(--stone)" }}
        >
          Les {etapes.length} étapes
        </h2>
        <ol className="relative flex flex-col gap-3">
          <div
            className="absolute left-10 top-2 bottom-2 hidden sm:block"
            style={{
              width: "1px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--frame) 0 5px, transparent 5px 10px)",
            }}
            aria-hidden="true"
          />
          {etapes.map((etape) => (
            <li key={etape.id} className="relative">
              <Link
                href={`/etapes/${etape.slug}`}
                className="card-link relative flex items-center gap-4 px-4 py-4 border rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ borderColor: "var(--frame)", background: "var(--paper)" }}
              >
                <EtapeThumb etape={etape} />
                {etape.order !== undefined && (
                  <span
                    className="w-6 h-6 flex-shrink-0 text-xs flex items-center justify-center rounded-full font-sans font-medium border"
                    style={{
                      background: "var(--paper)",
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
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
          href="/parcours/apres-midi"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Parcours de l&apos;après-midi →
        </Link>
      </div>
    </div>
  );
}
