import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { parcoursData } from "@/lib/data/parcours";
import { getImageById } from "@/lib/data/images";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const pauseImage = getImageById("villa-rohannec-h-contemporaine");

const title = "Infos pratiques";
const description =
  "Rendez-vous, parcours et pauses de la Randonnée vélo Louis Guilloux, le 20 septembre 2026 à Saint-Brieuc.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/infos-pratiques",
  }),
};

function IconPin() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
      />
      <circle cx="12" cy="9.5" r="2.25" strokeLinecap="round" />
    </svg>
  );
}

function IconBike() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="5.5" cy="17.5" r="3.25" />
      <circle cx="18.5" cy="17.5" r="3.25" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 17.5 10 9h5.5l3 8.5M10 9 8.5 6h-2M10 9l3 5h5.5"
      />
    </svg>
  );
}

function IconPicnic() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20l4-9m8 9-4-9m-6 0h8M6 11l1.5-6h9L18 11"
      />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 11v5.5" />
      <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="border rounded-xl p-5 sm:p-6"
      style={{ borderColor: "var(--frame)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
        >
          {icon}
        </span>
        <h2 className="text-xl sm:text-2xl" style={{ color: "var(--ink)" }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function InfosPratiquesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <p
        className="text-sm font-sans tracking-widest uppercase mb-2"
        style={{ color: "var(--stone)" }}
      >
        20 septembre 2026 · Saint-Brieuc
      </p>
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Infos pratiques
      </h1>
      <p
        className="text-lg leading-relaxed mb-10"
        style={{ color: "var(--ink-light)" }}
      >
        L&apos;essentiel à savoir le jour de la randonnée.
      </p>

      <div className="flex flex-col gap-6">
        <Block icon={<IconPin />} title="Rendez-vous">
          <ul className="space-y-4">
            <li
              className="flex gap-4 border-l-2 pl-3 -ml-px"
              style={{ borderColor: "var(--accent)" }}
            >
              <span
                className="font-sans text-sm w-16 flex-shrink-0 pt-0.5"
                style={{ color: "var(--stone)" }}
              >
                Matin
              </span>
              <p style={{ color: "var(--ink-light)" }}>
                Départ de la <strong>gare centrale de Saint-Brieuc</strong>{" "}
                pour le parcours du matin.
              </p>
            </li>
            <li
              className="flex gap-4 border-l-2 pl-3 -ml-px"
              style={{ borderColor: "var(--frame)" }}
            >
              <span
                className="font-sans text-sm w-16 flex-shrink-0 pt-0.5"
                style={{ color: "var(--stone)" }}
              >
                Midi
              </span>
              <p style={{ color: "var(--ink-light)" }}>
                Pique-nique à la <strong>Villa Rohannec&apos;h</strong>.
              </p>
            </li>
            <li
              className="flex gap-4 border-l-2 pl-3 -ml-px"
              style={{ borderColor: "var(--accent-secondary)" }}
            >
              <span
                className="font-sans text-sm w-16 flex-shrink-0 pt-0.5"
                style={{ color: "var(--stone)" }}
              >
                Après-midi
              </span>
              <p style={{ color: "var(--ink-light)" }}>
                Départ du <strong>collège Ernest Renan</strong> pour le
                parcours de l&apos;après-midi.
              </p>
            </li>
          </ul>
          <p
            className="mt-4 text-sm font-sans"
            style={{ color: "var(--stone)" }}
          >
            Horaires précis à venir — voir la page{" "}
            <Link
              href="/programme"
              className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              style={{ color: "var(--accent)" }}
            >
              Programme
            </Link>
            .
          </p>
        </Block>

        <Block icon={<IconBike />} title="Parcours">
          <div className="flex flex-col gap-5">
            {parcoursData.map((parcours) => {
              const pillTone =
                parcours.id === "apres-midi" ? "accent-secondary" : "accent";
              return (
                <div
                  key={parcours.id}
                  className="pb-5 border-b last:border-0 last:pb-0"
                  style={{ borderColor: "var(--frame)" }}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <p
                      className="font-sans font-medium"
                      style={{ color: "var(--ink)" }}
                    >
                      {parcours.name}
                    </p>
                    <span
                      className="font-sans text-sm flex-shrink-0"
                      style={{ color: "var(--stone)" }}
                    >
                      {parcours.distance}
                    </span>
                  </div>
                  {parcours.ambiance && (
                    <div className="mb-3">
                      <Pill tone={pillTone} uppercase>
                        {parcours.ambiance}
                      </Pill>
                    </div>
                  )}
                  {parcours.description && (
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "var(--ink-light)" }}
                    >
                      {parcours.description}
                    </p>
                  )}
                  <Button href={parcours.umapUrl} variant="accent" external>
                    Ouvrir la carte
                  </Button>
                </div>
              );
            })}
          </div>
        </Block>

        <Block icon={<IconPicnic />} title="Repas / pauses">
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="flex-1" style={{ color: "var(--ink-light)" }}>
              Un pique-nique est prévu à la mi-journée à la{" "}
              <strong>Villa Rohannec&apos;h</strong>, avec présentation du
              lieu et activités littéraires.
            </p>
            <div
              className="relative w-full sm:w-32 flex-shrink-0 overflow-hidden rounded-lg border"
              style={{ borderColor: "var(--frame)", aspectRatio: "4 / 3" }}
            >
              <Image
                src={`/images/lieux/${pauseImage.fileName}`}
                alt={pauseImage.alt}
                fill
                sizes="(min-width: 640px) 128px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Block>

        <Block icon={<IconInfo />} title="En cas de besoin">
          <p style={{ color: "var(--ink-light)" }}>
            Les informations complémentaires (horaires précis, équipement,
            contact sur place) seront publiées sur cette page dès qu&apos;elles
            seront fixées.
          </p>
        </Block>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <Button href="/programme" variant="accent">
          Voir le programme
        </Button>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/parcours"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Voir les parcours →
          </Link>
          <Link
            href="/livret"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Livret du participant →
          </Link>
        </div>
      </div>
    </div>
  );
}
