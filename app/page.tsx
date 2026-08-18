import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { parcoursData } from "@/lib/data/parcours";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import { getImageById } from "@/lib/data/images";
import Button from "@/components/Button";
import Card from "@/components/Card";
import JsonLd from "@/components/JsonLd";
import Pill from "@/components/Pill";
import Quote from "@/components/Quote";
import RouteDivider from "@/components/RouteDivider";
import { pageMetadata } from "@/lib/seo";
import { eventJsonLd } from "@/lib/structuredData";

const heroImage = getImageById("tour-cesson-contemporaine");

const galleryLarge = { ...getImageById("gare-saint-brieuc-contemporaine"), etapeSlug: "gare-de-saint-brieuc" };
const gallerySmall = [
  { ...getImageById("vallee-gouedic-contemporaine"), etapeSlug: "vallee-du-gouedic" },
  { ...getImageById("cimetiere-saint-michel-contemporaine"), etapeSlug: "cimetiere-saint-michel" },
  { ...getImageById("port-legue-contemporaine"), etapeSlug: "port-du-legue" },
  { ...getImageById("hillion-eglise-contemporaine"), etapeSlug: "hillion" },
];

const homeTitle = "Rallye Vélo Louis Guilloux — Saint-Brieuc, 20 septembre 2026";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  ...pageMetadata({
    ogTitle: homeTitle,
    description:
      "Rallye à vélo littéraire sur les traces de Louis Guilloux à Saint-Brieuc : deux parcours, des étapes patrimoniales et des extraits lus en chemin, le 20 septembre 2026.",
    path: "/",
    image: { url: `/images/lieux/${heroImage.fileName}`, alt: heroImage.alt },
  }),
};

export default function HomePage() {
  const etapesMatin = getEtapesByRouteId("matin");
  const etapesApresMidi = getEtapesByRouteId("apres-midi");

  return (
    <div>
      <JsonLd data={eventJsonLd()} />
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="border-b"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <p
              className="text-sm font-sans tracking-widest uppercase mb-4"
              style={{ color: "var(--stone)" }}
            >
              20 septembre 2026 · Saint-Brieuc
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Rallye Vélo
              <br />
              Louis Guilloux
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--ink-light)" }}
            >
              Une balade à vélo sur les traces de l&apos;écrivain briochin Louis
              Guilloux — de la gare de Saint-Brieuc aux paysages d&apos;Hillion,
              en passant par les lieux qui ont nourri son œuvre.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/parcours" variant="primary">
                Voir les parcours
              </Button>
              <Button href="/programme" variant="outline">
                Programme de la journée
              </Button>
            </div>
          </div>

          <figure className="order-first lg:order-none">
            <div
              className="relative w-full overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--frame)", aspectRatio: "4 / 3" }}
            >
              <Image
                src={`/images/lieux/${heroImage.fileName}`}
                alt={heroImage.alt}
                fill
                sizes="(min-width: 1024px) 490px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption
              className="mt-2 text-xs font-sans"
              style={{ color: "var(--stone)" }}
            >
              {heroImage.title} — {heroImage.credit}
            </figcaption>
          </figure>
        </div>
      </section>

      <RouteDivider className="py-8 sm:py-10" />

      {/* ── Louis Guilloux ────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2
              className="text-2xl sm:text-3xl mb-4"
              style={{ color: "var(--ink)" }}
            >
              Louis Guilloux
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--ink-light)" }}>
              Né à Saint-Brieuc, fils de cordonnier, Louis Guilloux est l&apos;auteur
              du <em>Sang Noir</em> (1935), du <em>Jeu de Patience</em> (1949)
              et de <em>L&apos;Herbe d&apos;oubli</em> (posthume, 1984). Son œuvre
              plonge ses racines dans la ville qui l&apos;a vu naître — ses rues,
              ses gares, ses vallées, ses histoires de guerre et de réfugiés.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "var(--ink-light)" }}>
              Ami d&apos;Albert Camus, disciple de Georges Palante, engagé aux
              côtés des réfugiés espagnols, Guilloux incarne une littérature
              du témoignage et de la dignité humaine.
            </p>
            <Link
              href="/louis-guilloux"
              className="inline-block py-1 -my-1 text-sm font-sans font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Citation ──────────────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Quote
            size="large"
            author="Louis Guilloux"
            work="L'Herbe d'oubli"
            reference="Gallimard, 1984 — sur la gare et le port de Saint-Brieuc"
          >
            Et les sifflets des locomotives ! Et l&apos;odeur de la fumée !
            Et le mouvement, les cris, les appels de gens qui avaient le
            bonheur de partir, tous de grands aventuriers !
          </Quote>
        </div>
      </section>

      {/* ── Le parcours en images ────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
        </div>
      </section>

      {/* ── Les parcours ──────────────────────────────────────────────── */}
      <section
        className="border-t border-b py-12 sm:py-16"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl mb-8"
            style={{ color: "var(--ink)" }}
          >
            Les parcours
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {parcoursData.map((parcours) => {
              const isApresMidi = parcours.id === "apres-midi";
              const cover = parcours.coverImageId
                ? getImageById(parcours.coverImageId)
                : undefined;

              return (
                <Card key={parcours.id} as="article">
                  <div className="flex items-center gap-2 mb-3">
                    <Pill tone={isApresMidi ? "accent-secondary" : "accent"} uppercase>
                      {isApresMidi ? "Après-midi" : "Matin"}
                    </Pill>
                    {parcours.ambiance && (
                      <span
                        className="text-xs font-sans"
                        style={{ color: "var(--stone)" }}
                      >
                        {parcours.ambiance}
                      </span>
                    )}
                  </div>

                  {cover && (
                    <div
                      className="relative w-full overflow-hidden rounded-lg border mb-4"
                      style={{
                        borderColor: "var(--frame)",
                        aspectRatio: isApresMidi ? "16 / 9" : "4 / 3",
                      }}
                    >
                      <Image
                        src={`/images/lieux/${cover.fileName}`}
                        alt={cover.alt}
                        fill
                        sizes="(min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <h3
                    className="text-lg mb-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {parcours.name}
                  </h3>
                  <p
                    className="text-sm font-sans mb-1"
                    style={{ color: "var(--stone)" }}
                  >
                    {parcours.distance}
                    {parcours.route && ` · ${parcours.route}`}
                    {!parcours.route && parcours.location && ` · ${parcours.location}`}
                  </p>
                  {parcours.description && (
                    <p
                      className="text-sm leading-relaxed mt-2 mb-4"
                      style={{ color: "var(--ink-light)" }}
                    >
                      {parcours.description}
                    </p>
                  )}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button href={parcours.umapUrl} variant="accent" external>
                      Ouvrir la carte
                    </Button>
                    <Button href={`/parcours/${parcours.slug}`} variant="outline">
                      Détails du parcours
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Étapes aperçu ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl mb-2"
            style={{ color: "var(--ink)" }}
          >
            Les étapes
          </h2>
          <p
            className="font-sans text-sm mb-8"
            style={{ color: "var(--stone)" }}
          >
            {etapesMatin.length} étapes le matin · {etapesApresMidi.length}{" "}
            étapes l&apos;après-midi
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3
                className="text-sm font-sans font-medium tracking-widest uppercase mb-4"
                style={{ color: "var(--stone)" }}
              >
                Matin
              </h3>
              <ul className="flex flex-col gap-1">
                {etapesMatin.map((etape) => (
                  <li key={etape.id}>
                    <Link
                      href={`/etapes/${etape.slug}`}
                      className="card-link flex items-center gap-2 py-2 px-2 -mx-2 text-sm font-sans rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "var(--ink-light)" }}
                    >
                      <span
                        className="w-5 h-5 flex-shrink-0 text-xs flex items-center justify-center rounded-full font-medium"
                        style={{
                          background: "var(--muted)",
                          color: "var(--stone)",
                        }}
                      >
                        {etape.order}
                      </span>
                      {etape.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-sm font-sans font-medium tracking-widest uppercase mb-4"
                style={{ color: "var(--stone)" }}
              >
                Après-midi
              </h3>
              <ul className="flex flex-col gap-1">
                {etapesApresMidi.map((etape) => (
                  <li key={etape.id}>
                    <Link
                      href={`/etapes/${etape.slug}`}
                      className="card-link flex items-center gap-2 py-2 px-2 -mx-2 text-sm font-sans rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "var(--ink-light)" }}
                    >
                      <span
                        className="w-5 h-5 flex-shrink-0 text-xs flex items-center justify-center rounded-full font-medium"
                        style={{
                          background: "var(--muted)",
                          color: "var(--stone)",
                        }}
                      >
                        {etape.order}
                      </span>
                      {etape.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/etapes"
              className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              style={{ color: "var(--accent)" }}
            >
              Voir toutes les étapes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Programme / Livret ────────────────────────────────────────── */}
      <section
        className="border-t py-12 sm:py-16"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2
                className="text-xl mb-2"
                style={{ color: "var(--ink)" }}
              >
                Programme de la journée
              </h2>
              <p
                className="text-sm leading-relaxed mb-4 font-sans"
                style={{ color: "var(--ink-light)" }}
              >
                Le déroulé de la journée : parcours du matin, pique-nique
                à la Villa Rohannec&apos;h, puis parcours de l&apos;après-midi.
                Les horaires précis seront publiés dès qu&apos;ils seront
                fixés.
              </p>
              <Link
                href="/programme"
                className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                style={{ color: "var(--accent)" }}
              >
                En savoir plus →
              </Link>
            </div>
            <div>
              <h2
                className="text-xl mb-2"
                style={{ color: "var(--ink)" }}
              >
                Livret du participant
              </h2>
              <p
                className="text-sm leading-relaxed mb-4 font-sans"
                style={{ color: "var(--ink-light)" }}
              >
                Le livret accompagne le rallye étape par étape, avec extraits
                littéraires et informations pratiques.
              </p>
              <Link
                href="/livret"
                className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                style={{ color: "var(--accent)" }}
              >
                Accéder au livret →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
