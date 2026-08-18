import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "outline";

const variantStyle: Record<Variant, React.CSSProperties> = {
  primary: { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" },
  accent: { background: "var(--accent)", color: "var(--paper)", borderColor: "var(--accent)" },
  outline: { background: "transparent", color: "var(--ink-light)", borderColor: "var(--frame)" },
};

const baseClass =
  "inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-sans font-medium rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

type ButtonProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${baseClass} ${className}`.trim();
  const style = variantStyle[variant];

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {children}
        <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
    </Link>
  );
}
