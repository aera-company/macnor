"use client";

import { useEffect, useRef } from "react";

/* Texto que revela a cor conforme o scroll: cada palavra transita de cinza
   (--gray) para azul profundo (--deep) à medida que a seção sobe na viewport.
   O progresso é calculado pela posição do bloco; a cor é aplicada via ref
   (sem re-render). `prefers-reduced-motion` → tudo em azul, sem scrub. */
type Props = {
  lead?: string;
  body: string;
  className?: string;
  align?: "left" | "center";
};

export function ScrollRevealText({
  lead,
  body,
  className = "",
  align = "left",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const ticking = useRef(false);

  const leadWords = lead ? lead.split(" ") : [];
  const bodyWords = body.split(" ");
  wordRefs.current = [];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = wordRefs.current;

    if (reduced) {
      words.forEach((w) => w && (w.style.color = "var(--deep)"));
      return;
    }

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const vh = window.innerHeight;
        // Cada palavra revela conforme o SEU centro sobe pela viewport,
        // cruzando uma faixa de foco (estilo gttmarine): cinza embaixo →
        // azul ao subir. Garante que o lead também passe por cinza.
        const start = vh * 0.82; // centro da palavra aqui = começa a revelar
        const end = vh * 0.48; //  centro aqui = totalmente azul
        const span = start - end;
        for (let i = 0; i < words.length; i++) {
          const w = words[i];
          if (!w) continue;
          const r = w.getBoundingClientRect();
          const centerY = r.top + r.height / 2;
          const lit = Math.min(1, Math.max(0, (start - centerY) / span));
          w.style.color = `color-mix(in srgb, var(--deep) ${Math.round(
            lit * 100,
          )}%, var(--gray-soft))`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [lead, body, align]);

  let idx = 0;
  const renderWords = (words: string[]) =>
    words.map((word, j) => {
      const i = idx++;
      // nbsp antes da última palavra → evita "órfã" sozinha na última linha.
      const sep = j === words.length - 2 ? " " : " ";
      return (
        <span
          key={i}
          ref={(el) => {
            wordRefs.current[i] = el;
          }}
          style={{ color: "var(--gray-soft)" }}
        >
          {word}
          {sep}
        </span>
      );
    });

  const hasLead = leadWords.length > 0;
  const justify = align === "center" ? "text-pretty text-center" : "";

  return (
    <div ref={containerRef} className={className}>
      {hasLead && (
        <p className="font-sans text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {renderWords(leadWords)}
        </p>
      )}
      <p
        className={`font-sans text-xl leading-relaxed md:text-3xl md:leading-[1.5] ${
          hasLead ? "mt-7 max-w-[64ch]" : ""
        } ${justify}`}
      >
        {renderWords(bodyWords)}
      </p>
    </div>
  );
}
