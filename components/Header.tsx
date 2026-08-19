"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/parcours", label: "Parcours" },
  { href: "/etapes", label: "Étapes" },
  { href: "/louis-guilloux", label: "Louis Guilloux" },
  { href: "/lectures", label: "Lectures" },
  { href: "/livret", label: "Livret" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/partenaires", label: "Partenaires" },
];

function isNavActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--paper)",
        borderColor: "var(--frame)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--ink)",
            }}
          >
            Randonnée vélo Louis Guilloux
          </Link>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map(({ href, label }) => {
                const active = isNavActive(pathname, href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className="px-3 py-2 text-sm rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-sans"
                      style={
                        active
                          ? {
                              color: "var(--accent)",
                              fontWeight: 600,
                            }
                          : {
                              color: "var(--ink-light)",
                            }
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: "var(--ink-light)" }}
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      <nav
        id="mobile-nav"
        aria-label="Navigation mobile"
        className={`lg:hidden border-t ${menuOpen ? "block" : "hidden"}`}
        style={{
          background: "var(--paper)",
          borderColor: "var(--frame)",
        }}
      >
        <ul className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
          {navLinks.map(({ href, label }) => {
            const active = isNavActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-3 text-base rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-sans"
                  style={
                    active
                      ? { color: "var(--accent)", fontWeight: 600 }
                      : { color: "var(--ink-light)" }
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
