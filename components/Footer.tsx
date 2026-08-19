import Link from "next/link";
import Image from "next/image";
import { partenairesData } from "@/lib/data/partenaires";

const secondaryLinks = [
  { href: "/parcours", label: "Parcours" },
  { href: "/etapes", label: "Étapes" },
  { href: "/programme", label: "Programme" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/livret", label: "Livret" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/confidentialite", label: "Confidentialité" },
];

function PartenaireBadge({
  partenaire,
}: {
  partenaire: (typeof partenairesData)[number];
}) {
  const content = (
    <>
      {partenaire.logo && (
        <Image
          src={`/images/partenaires/${partenaire.logo.fileName}`}
          alt=""
          width={partenaire.logo.width}
          height={partenaire.logo.height}
          className="h-9 w-auto max-w-[6.5rem] object-contain flex-shrink-0"
        />
      )}
      <span
        className="text-sm font-sans"
        style={{ color: "var(--ink-light)" }}
      >
        {partenaire.name}
        {partenaire.url && (
          <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
        )}
      </span>
    </>
  );

  const className =
    "flex items-center gap-3 py-1 rounded transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  if (partenaire.url) {
    return (
      <a href={partenaire.url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--muted)",
        borderColor: "var(--frame)",
      }}
    >
      {partenairesData.length > 0 && (
        <div className="border-b" style={{ borderColor: "var(--frame)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p
              className="text-center text-xs font-sans font-medium tracking-widest uppercase mb-5"
              style={{ color: "var(--stone)" }}
            >
              Partenaires et structures associées
            </p>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-4">
              {partenairesData.map((partenaire) => (
                <PartenaireBadge key={partenaire.id} partenaire={partenaire} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p
              className="text-base"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--ink)",
              }}
            >
              Randonnée vélo Louis Guilloux
            </p>
            <p
              className="text-sm mt-1 font-sans"
              style={{ color: "var(--stone)" }}
            >
              Saint-Brieuc — 20 septembre 2026
            </p>
          </div>

          <nav aria-label="Navigation secondaire">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {secondaryLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block py-1 -my-1 text-sm font-sans transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ color: "var(--stone)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
