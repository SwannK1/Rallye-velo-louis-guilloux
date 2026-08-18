import type { Metadata } from "next";
import Link from "next/link";
import { getParcoursById } from "@/lib/data/parcours";
import { getEtapesByRouteId } from "@/lib/data/etapes";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Programme";
const description =
  "Le déroulé du Rallye Vélo Louis Guilloux, 20 septembre 2026 à Saint-Brieuc : étapes du matin, pique-nique et parcours de l'après-midi.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/programme",
  }),
};

function TimelineGroup({
  label,
  parcoursId,
  distance,
}: {
  label: string;
  parcoursId: string;
  distance?: string;
}) {
  const parcours = getParcoursById(parcoursId);
  const etapes = [...getEtapesByRouteId(parcoursId)].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-5">
        <h2
          className="font-sans text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          {label}
        </h2>
        {distance && (
          <span className="font-sans text-sm" style={{ color: "var(--stone)" }}>
            {distance}
          </span>
        )}
      </div>

      <ol className="relative">
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px"
          style={{ background: "var(--frame)" }}
          aria-hidden="true"
        />
        {etapes.map((etape) => (
          <li key={etape.slug} className="relative pl-10 pb-8 last:pb-0">
            <span
              className="absolute left-0 top-0.5 flex items-center justify-center w-8 h-8 rounded-full font-sans text-xs font-medium border-2"
              style={{
                background: "var(--paper)",
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
              aria-hidden="true"
            >
              {etape.order}
            </span>
            <Link
              href={`/etapes/${etape.slug}`}
              className="group block rounded-lg -mx-2 px-2 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: "var(--ink)" }}
            >
              <p className="font-sans font-medium leading-snug group-hover:underline">
                {etape.title}
              </p>
              {etape.theme && (
                <p
                  className="text-sm mt-0.5 leading-snug"
                  style={{ color: "var(--ink-light)" }}
                >
                  {etape.theme}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ol>

      {parcours && (
        <Link
          href={`/parcours/${parcours.id}`}
          className="inline-block py-1 -my-1 mt-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Voir le tracé du {label.toLowerCase()} →
        </Link>
      )}
    </div>
  );
}

export default function ProgrammePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <p
        className="text-sm font-sans tracking-widest uppercase mb-2"
        style={{ color: "var(--stone)" }}
      >
        Samedi 20 septembre 2026 · Saint-Brieuc
      </p>
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Programme
      </h1>
      <p
        className="text-lg leading-relaxed mb-12"
        style={{ color: "var(--ink-light)" }}
      >
        Une journée à vélo dans Saint-Brieuc et jusqu&apos;à Hillion, sur les
        pas de Louis Guilloux et Georges Palante : deux parcours, une pause
        à la Villa Rohannec&apos;h, et une lecture à chaque étape.
      </p>

      <div className="space-y-14">
        <TimelineGroup
          label="Parcours du matin"
          parcoursId="matin"
          distance="13 km"
        />

        <div
          className="rounded-xl p-5 border"
          style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
        >
          <p
            className="font-sans font-medium text-sm mb-1"
            style={{ color: "var(--ink)" }}
          >
            Pique-nique — Villa Rohannec&apos;h
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink-light)" }}>
            Présentation du lieu et activités littéraires, avant le départ du
            parcours de l&apos;après-midi depuis le collège Ernest Renan.
          </p>
        </div>

        <TimelineGroup
          label="Parcours de l'après-midi"
          parcoursId="apres-midi"
          distance="environ 30 km"
        />
      </div>

      <section
        className="mt-14 rounded-xl p-5 border"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <p
          className="font-sans text-sm"
          style={{ color: "var(--ink-light)" }}
        >
          Les horaires précis (rendez-vous, départs, retour) seront publiés
          dès qu&apos;ils seront fixés. Consultez la page{" "}
          <Link
            href="/infos-pratiques"
            className="font-medium underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Infos pratiques
          </Link>{" "}
          pour les mises à jour.
        </p>
      </section>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/parcours"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Voir les parcours →
        </Link>
        <Link
          href="/etapes"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Voir les étapes →
        </Link>
      </div>
    </div>
  );
}
