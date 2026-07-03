import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DIFFERENTIALS, DIFFERENTIALS_INTRO } from "@/data/content";

export function Differentials() {
  return (
    <section className="surface-light px-6 py-24 md:px-10 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1320px]">
        <AnimatedItem>
          <SectionLabel>{DIFFERENTIALS_INTRO.eyebrow}</SectionLabel>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="mt-5 max-w-[24ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
            {DIFFERENTIALS_INTRO.headline}
          </h2>
        </AnimatedItem>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d) => (
            <AnimatedItem
              key={d.n}
              className="group flex flex-col gap-4 bg-white p-8 transition-colors duration-300 hover:bg-light md:p-10"
            >
              <span className="font-mono text-sm text-accent">{d.n}</span>
              <h3 className="font-sans text-lg font-semibold tracking-tight text-deep">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-graphite">{d.text}</p>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
