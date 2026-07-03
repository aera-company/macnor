type Props = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/* Rótulo de seção (eyebrow): traço curto + texto mono em caixa alta. */
export function SectionLabel({ children, tone = "light", className = "" }: Props) {
  const text = tone === "dark" ? "text-white/70" : "text-graphite";
  return (
    <span
      className={`inline-flex items-center gap-3 eyebrow ${text} ${className}`}
    >
      <span aria-hidden className="h-px w-7 bg-accent" />
      {children}
    </span>
  );
}
