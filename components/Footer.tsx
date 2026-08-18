import Link from "next/link";

const secondaryLinks = [
  { href: "/parcours", label: "Parcours" },
  { href: "/etapes", label: "Étapes" },
  { href: "/programme", label: "Programme" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/livret", label: "Livret" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--muted)",
        borderColor: "var(--frame)",
      }}
    >
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
              Rallye Vélo Louis Guilloux
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
