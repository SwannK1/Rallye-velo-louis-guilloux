import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "muted" | "accent" | "outline";

const toneStyle: Record<Tone, React.CSSProperties> = {
  muted: { background: "var(--muted)", color: "var(--ink-light)", borderColor: "var(--muted)" },
  accent: {
    background: "var(--accent-bg)",
    color: "var(--accent)",
    borderColor: "var(--accent-bg)",
  },
  outline: { background: "transparent", color: "var(--ink-light)", borderColor: "var(--frame)" },
};

export default function Pill({
  children,
  tone = "muted",
  href,
  uppercase = false,
}: {
  children: ReactNode;
  tone?: Tone;
  href?: string;
  uppercase?: boolean;
}) {
  const classes = [
    "inline-flex items-center gap-1.5 rounded-full border",
    uppercase
      ? "px-2.5 py-1 text-xs font-sans font-medium uppercase tracking-wide"
      : "px-3 py-1.5 text-sm font-sans",
    href ? "card-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const style = toneStyle[tone];

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
}
