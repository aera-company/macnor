import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PARTNERS_INTRO, PARTNERS } from "@/data/content";

export function Partners() {
  return (
    <section id="marcas" className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1320px]">
        <AnimatedItem>
          <SectionLabel>{PARTNERS_INTRO.eyebrow}</SectionLabel>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="mt-5 max-w-[22ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
            {PARTNERS_INTRO.headline}
          </h2>
        </AnimatedItem>

        {/* Marcas em ordem alfabética — monocromia, cor no hover. */}
        <AnimatedItem className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className={`flex h-24 items-center justify-center rounded-xl border border-border bg-white transition-colors duration-300 hover:border-accent/40 ${
                  p.big === "xl" ? "p-2" : "p-5"
                }`}
                title={p.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.file}
                  alt={p.name}
                  className={`${
                    p.big === "xl"
                      ? "max-h-20"
                      : p.big
                        ? "max-h-16"
                        : "max-h-12"
                  } max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
