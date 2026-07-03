import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { MANIFESTO } from "@/data/content";

/* Ícones de linha (em círculo tracejado), um por stat. */
const ICONS = [
  <svg key="anchor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v13" />
    <path d="M5 12H3a9 9 0 0 0 18 0h-2" />
    <path d="M9 9h6" />
  </svg>,
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3z" />
  </svg>,
  <svg key="waves" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
    <path d="M2 7c2 0 2 1.5 4 1.5S10 7 12 7s2 1.5 4 1.5S18 7 20 7" />
    <path d="M2 12c2 0 2 1.5 4 1.5S10 12 12 12s2 1.5 4 1.5S18 12 20 12" />
    <path d="M2 17c2 0 2 1.5 4 1.5S10 17 12 17s2 1.5 4 1.5S18 17 20 17" />
  </svg>,
];

export function Manifesto() {
  return (
    <section
      id="posicionamento"
      className="relative flex scroll-mt-20 items-center overflow-hidden bg-light px-6 py-40 md:min-h-[200vh] md:px-10 md:py-56"
    >
      {/* Foto de fundo + overlay claro para legibilidade. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[length:100%_auto] bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/manifesto-bg.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(243,245,247,0.78)]" />

      <div className="relative mx-auto w-full max-w-[1320px]">
        {/* Texto-manifesto: centralizado, justificado, com revelação no scroll. */}
        <ScrollRevealText
          body={MANIFESTO.body}
          align="center"
          className="mx-auto max-w-[64rem]"
        />

        {/* Saiba mais */}
        <div className="mt-8 text-center">
          <a
            href="#mercados"
            className="group inline-flex items-center gap-1.5 py-2 text-sm font-medium text-deep transition-colors hover:text-accent"
          >
            Saiba mais
            <span
              aria-hidden
              className="text-accent transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>

        {/* Barra de destaque (stats) — agora ABAIXO do texto. */}
        <AnimatedSection className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-border shadow-[0_30px_60px_-40px_rgba(16,24,63,0.5)] sm:grid-cols-3 md:mt-24">
          {MANIFESTO.stats.map((s, i) => (
            <AnimatedItem
              key={s.label}
              className="group flex flex-col items-center gap-5 bg-white px-6 py-12 text-center transition-[transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-light md:py-14"
            >
              <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full border border-dashed border-deep/30 text-deep transition-[transform,color,border-color] duration-300 ease-out group-hover:scale-105 group-hover:border-accent group-hover:text-accent">
                {ICONS[i]}
              </span>
              <div className="flex flex-col items-center">
                <span className="font-sans text-2xl font-semibold leading-tight tracking-tight text-deep md:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1.5 max-w-[22ch] text-sm text-gray">
                  {s.label}
                </span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
