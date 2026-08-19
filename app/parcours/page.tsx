import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { parcoursData } from "@/lib/data/parcours";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import { getImageById } from "@/lib/data/images";
import Pill from "@/components/Pill";
import RouteDivider from "@/components/RouteDivider";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Parcours";
const description =
  "Deux parcours cyclistes proposés lors de la Randonnée vélo Louis Guilloux du 20 septembre 2026 à Saint-Brieuc.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/parcours",
  }),
};

const galleryLarge = {
  ...getImageById("gare-saint-brieuc-contemporaine"),
  etapeSlug: "gare-de-saint-brieuc",
  tone: "accent" as const,
  label: "Matin",
};
const gallerySmall = [
  {
    ...getImageById("vallee-gouedic-contemporaine"),
    etapeSlug: "vallee-du-gouedic",
    tone: "accent" as const,
    label: "Matin",
  },
  {
    ...getImageById("cimetiere-saint-michel-contemporaine"),
    etapeSlug: "cimetiere-saint-michel",
    tone: "accent" as const,
    label: "Matin",
  },
  {
    ...getImageById("port-legue-contemporaine"),
    etapeSlug: "port-du-legue",
    tone: "accent" as const,
    label: "Matin",
  },
  {
    ...getImageById("hillion-eglise-contemporaine"),
    etapeSlug: "hillion",
    tone: "accent-secondary" as const,
    label: "Après-midi",
  },
];

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

      <p className="text-sm font-sans mt-6" style={{ color: "var(--stone)" }}>
        Ce tracé a été conçu par{" "}
        <a
          href="https://velo-utile.fr/site/2026/07/rallye-velo-louis-guilloux/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Vélo Utile
          <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
        </a>
        , en collaboration avec la Société des Amis de Louis Guilloux.
      </p>

      <RouteDivider className="my-12" />

      {/* ── Le parcours en images ────────────────────────────────────────── */}
      <section>
        <h2
          className="text-2xl sm:text-3xl mb-8"
          style={{ color: "var(--ink)" }}
        >
          Le parcours en images
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-3 sm:gap-4">
          <Link
            href={`/etapes/${galleryLarge.etapeSlug}`}
            className="card-link group col-span-2 sm:row-span-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <figure>
              <div
                className="relative w-full overflow-hidden rounded-xl border"
                style={{ borderColor: "var(--frame)", aspectRatio: "4 / 3" }}
              >
                <Image
                  src={`/images/lieux/${galleryLarge.fileName}`}
                  alt={galleryLarge.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption
                className="mt-2 text-sm font-sans"
                style={{ color: "var(--ink-light)" }}
              >
                <div className="mb-1">
                  <Pill tone={galleryLarge.tone} uppercase>
                    {galleryLarge.label}
                  </Pill>
                </div>
                {galleryLarge.place}
                <span
                  className="block text-xs mt-0.5"
                  style={{ color: "var(--stone)" }}
                >
                  Voir l&apos;étape →
                </span>
              </figcaption>
            </figure>
          </Link>
          {gallerySmall.map((image) => (
            <Link
              key={image.id}
              href={`/etapes/${image.etapeSlug}`}
              className="card-link group rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <figure>
                <div
                  className="relative w-full overflow-hidden rounded-xl border"
                  style={{ borderColor: "var(--frame)", aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={`/images/lieux/${image.fileName}`}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 22vw, 50vw"
                    className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <figcaption
                  className="mt-2 text-xs sm:text-sm font-sans"
                  style={{ color: "var(--ink-light)" }}
                >
                  <div className="mb-1">
                    <Pill tone={image.tone} uppercase>
                      {image.label}
                    </Pill>
                  </div>
                  {image.place}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs font-sans" style={{ color: "var(--stone)" }}>
          {[galleryLarge, ...gallerySmall].map((img) => img.credit).filter(
            (v, i, a) => a.indexOf(v) === i,
          ).join(" · ")}
        </p>
      </section>
    </div>
  );
}
