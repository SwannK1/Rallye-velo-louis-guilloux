import type { ElementType, ReactNode } from "react";

type Tone = "default" | "muted";
type Padding = "default" | "compact";

export default function Card({
  children,
  tone = "default",
  padding = "default",
  className = "",
  as,
}: {
  children: ReactNode;
  tone?: Tone;
  padding?: Padding;
  className?: string;
  as?: ElementType;
}) {
  const Tag = as ?? "div";
  const pad = padding === "compact" ? "p-5" : "p-5 sm:p-6";

  return (
    <Tag
      className={`rounded-xl border ${pad} ${className}`.trim()}
      style={{
        borderColor: "var(--frame)",
        background: tone === "muted" ? "var(--muted)" : "var(--paper)",
      }}
    >
      {children}
    </Tag>
  );
}
