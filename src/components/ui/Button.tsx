import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "link";
type Tone = "light" | "dark";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  tone?: Tone;
  className?: string;
};

/* CTA reutilizável. `tone` indica o fundo onde o botão está. */
export function Button({
  children,
  href = "#",
  variant = "primary",
  tone = "light",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants: Record<Variant, Record<Tone, string>> = {
    primary: {
      light: "bg-deep text-white px-6 py-3 hover:-translate-y-0.5 hover:bg-navy",
      dark: "bg-white text-deep px-6 py-3 hover:-translate-y-0.5 hover:bg-light",
    },
    outline: {
      light:
        "border border-deep/25 text-deep px-6 py-3 hover:-translate-y-0.5 hover:border-deep hover:bg-deep/[0.04]",
      dark: "border border-white/30 text-white px-6 py-3 hover:-translate-y-0.5 hover:bg-white/10",
    },
    link: {
      light:
        "text-graphite px-1 py-1 hover:text-accent underline-offset-4 hover:underline",
      dark: "text-white/70 px-1 py-1 hover:text-accent underline-offset-4 hover:underline",
    },
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant][tone]} ${className}`}
    >
      {children}
      {variant !== "link" && (
        <span aria-hidden className="text-[1.1em] leading-none">
          &rarr;
        </span>
      )}
    </a>
  );
}
