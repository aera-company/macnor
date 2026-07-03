type MediaProps = {
  label?: string;
  tone?: "light" | "dark";
  className?: string;
  ratio?: string; // ex.: "16/9", "4/5"
};

/* Marcação de ESPAÇO DE IMAGEM/FOTO a ser inserida depois.
   Mantém o layout e deixa explícito o que falta de material. */
export function MediaPlaceholder({
  label = "Espaço para imagem",
  tone = "light",
  className = "",
  ratio,
}: MediaProps) {
  const isDark = tone === "dark";
  return (
    <div
      data-dark={isDark}
      className={`placeholder-media flex items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={`${label} (placeholder)`}
    >
      <span
        className={`eyebrow px-4 text-center ${
          isDark ? "text-white/55" : "text-graphite/70"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

type LogoProps = { tone?: "light" | "dark"; className?: string };

/* Marcação de ESPAÇO DE LOGO (parceiro/cliente) a inserir. */
export function LogoPlaceholder({ tone = "light", className = "" }: LogoProps) {
  const isDark = tone === "dark";
  return (
    <div
      data-dark={isDark}
      className={`placeholder-media flex h-16 items-center justify-center rounded-lg ${className}`}
      role="img"
      aria-label="Logo (placeholder)"
    >
      <span
        className={`eyebrow ${isDark ? "text-white/40" : "text-graphite/55"}`}
      >
        Logo
      </span>
    </div>
  );
}
