import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BASES, BASES_INTRO, BASE_SUPPORT } from "@/data/content";

export function Bases() {
  return (
    <section className="surface-light px-6 py-24 md:px-10 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Lado texto */}
          <div className="flex flex-col gap-6">
            <AnimatedItem>
              <SectionLabel>{BASES_INTRO.eyebrow}</SectionLabel>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="max-w-[18ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
                {BASES_INTRO.headline}
              </h2>
            </AnimatedItem>

            <AnimatedItem className="mt-2 overflow-hidden rounded-xl border border-border">
              {BASES.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center justify-between gap-3 border-b border-border bg-white px-5 py-4 last:border-b-0"
                >
                  <div className="flex items-center gap-2.5">
                    <span aria-hidden className="h-2 w-2 flex-none rounded-full bg-accent" />
                    <span className="font-sans font-semibold text-deep">
                      {b.name}
                    </span>
                  </div>
                  <span className="eyebrow text-gray">{b.role}</span>
                </div>
              ))}
            </AnimatedItem>

            <AnimatedSection className="mt-2 flex flex-wrap gap-2">
              {BASE_SUPPORT.map((s) => (
                <AnimatedItem key={s}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-graphite transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-deep">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                    {s}
                  </span>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>

          {/* Mapa do Brasil com as bases da MACNOR. */}
          <AnimatedItem className="relative overflow-hidden rounded-2xl border border-border bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brasil.jpg"
              alt="Mapa do Brasil com as bases da MACNOR"
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </section>
  );
}
