import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS, SOLUTIONS_INTRO } from "@/data/content";

export function SpecialSolutions() {
  return (
    <section id="solucoes" className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1320px]">
        <AnimatedItem>
          <SectionLabel>{SOLUTIONS_INTRO.eyebrow}</SectionLabel>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="mt-5 max-w-[22ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
            {SOLUTIONS_INTRO.headline}
          </h2>
        </AnimatedItem>

        <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <AnimatedItem
              key={s.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_28px_56px_-32px_rgba(16,24,63,0.45)]"
            >
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <h3 className="font-sans text-xl font-semibold tracking-tight text-deep">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite">{s.text}</p>
                <ul className="mt-1 flex flex-col gap-2">
                  {s.topics.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2.5 text-sm text-graphite"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 flex-none rounded-full bg-accent"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button href="#contato" variant="link">
                    {s.cta} &rarr;
                  </Button>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
