import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { BrandCurve } from "@/components/ui/BrandCurve";
import { FINAL_CTA } from "@/data/content";

export function FinalCTA() {
  return (
    <section className="surface-dark relative overflow-hidden px-6 py-28 md:px-10 md:py-36">
      {/* curva da marca como elemento gráfico de fundo */}
      <BrandCurve className="pointer-events-none absolute -right-10 top-10 h-40 w-[60%] text-white/[0.06]" strokeWidth={2} />

      <AnimatedSection className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-7 text-center">
        <AnimatedItem>
          <h2 className="font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            <span className="block whitespace-nowrap">Uma MACNOR.</span>
            <span className="block whitespace-nowrap">Toda a operação.</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="max-w-[44ch] text-balance text-base leading-relaxed text-white/70">
            {FINAL_CTA.text}
          </p>
        </AnimatedItem>
        <AnimatedItem className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button href="#contato" tone="dark">Falar com a MACNOR</Button>
          <Button href="#contato" variant="outline" tone="dark">Solicitar suporte técnico</Button>
        </AnimatedItem>
        <AnimatedItem>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 py-2 text-sm text-accent transition-opacity hover:opacity-80"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(197,138,61,0.85)]" />
            Emergência 24/7
          </a>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
