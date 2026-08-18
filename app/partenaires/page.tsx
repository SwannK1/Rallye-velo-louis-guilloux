import type { Metadata } from "next";
import { partenairesData, creditsData } from "@/lib/data/partenaires";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Partenaires";
const description =
  "Les partenaires et sources du Rallye Vélo Louis Guilloux, 20 septembre 2026 à Saint-Brieuc.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/partenaires",
  }),
};

function IconHandshake() {
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
        d="m3 11 4-4 5 3 2-2 7 6-3 3-6-4-2 2-4-1"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 13-3 3-3-2" />
    </svg>
  );
}

function IconArchive() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3.5" y="4.5" width="17" height="4.5" rx="1" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 9v8a1.5 1.5 0 0 0 1.5 1.5h12A1.5 1.5 0 0 0 19.5 17V9M10 13h4"
      />
    </svg>
  );
}

export default function PartenairesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Partenaires
      </h1>
      <p
        className="text-lg leading-relaxed mb-12"
        style={{ color: "var(--ink-light)" }}
      >
        Le Rallye Vélo Louis Guilloux se construit avec le soutien
        d&apos;associations et de sources documentaires qui rendent le
        parcours possible.
      </p>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <IconHandshake />
          </span>
          <h2 className="text-xl sm:text-2xl" style={{ color: "var(--ink)" }}>
            Partenaires
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {partenairesData.map((partenaire) => (
            <div
              key={partenaire.id}
              className="border rounded-xl p-5"
              style={{ borderColor: "var(--frame)" }}
            >
              <p
                className="font-sans font-medium mb-1"
                style={{ color: "var(--ink)" }}
              >
                {partenaire.name}
              </p>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--ink-light)" }}
              >
                {partenaire.role}
              </p>
              {partenaire.url && (
                <a
                  href={partenaire.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 -my-1 text-sm font-sans font-medium underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                  style={{ color: "var(--accent)" }}
                >
                  Site officiel
                  <span className="sr-only">
                    {" "}(s&apos;ouvre dans un nouvel onglet)
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>

        <p
          className="mt-4 text-sm font-sans"
          style={{ color: "var(--stone)" }}
        >
          D&apos;autres collaborations sont en cours de discussion et seront
          ajoutées ici dès qu&apos;elles seront confirmées.
        </p>
      </section>

      <section
        className="rounded-xl p-5 sm:p-6 border"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span
            className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            <IconArchive />
          </span>
          <h2 className="text-lg sm:text-xl" style={{ color: "var(--ink)" }}>
            Crédits
          </h2>
        </div>

        <dl className="space-y-4">
          {creditsData.map((credit) => (
            <div key={credit.id}>
              <dt
                className="font-sans text-sm font-medium mb-1"
                style={{ color: "var(--ink)" }}
              >
                {credit.label}
              </dt>
              <dd
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink-light)" }}
              >
                {credit.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
