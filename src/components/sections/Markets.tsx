import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoMedia } from "@/components/ui/VideoMedia";
import { FRONTS, FRONTS_INTRO, type Front } from "@/data/content";

// Duas linhas; ao passar o mouse, o card cresce e o vizinho encolhe.
const ROWS: Front[][] = [
  [FRONTS[0], FRONTS[1]],
  [FRONTS[2], FRONTS[3]],
];

function FrontCard({ f }: { f: Front }) {
  return (
    <AnimatedItem className="md:flex-1 md:basis-0 md:transition-[flex-grow] md:duration-500 md:ease-out md:hover:flex-[2.2]">
      <a
        href={f.href}
        className="group relative block h-[360px] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-300 hover:ring-white/25 md:h-[460px]"
      >
        <VideoMedia
          src={f.video}
          poster={f.poster}
          label={`${f.name} — MACNOR`}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/5" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-7 md:p-9">
          <h3 className="font-sans text-2xl font-semibold tracking-tight text-white md:text-[2rem]">
            {f.name}
          </h3>
          <p className="max-w-[44ch] text-sm leading-relaxed text-white/75">
            {f.description}
          </p>
          <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white">
            {f.cta}
            <span
              aria-hidden
              className="text-accent transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </span>
        </div>
      </a>
    </AnimatedItem>
  );
}

export function Markets() {
  return (
    <section
      id="mercados"
      className="surface-darkest scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <AnimatedSection className="mx-auto max-w-[1320px]">
        <AnimatedItem>
          <SectionLabel tone="dark">{FRONTS_INTRO.eyebrow}</SectionLabel>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="mt-5 max-w-[24ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
            {FRONTS_INTRO.headline}
          </h2>
        </AnimatedItem>

        <div className="mt-14 flex flex-col gap-4 md:mt-20 md:gap-5">
          {ROWS.map((row, ri) => (
            <div key={ri} className="flex flex-col gap-4 md:flex-row md:gap-5">
              {row.map((f) => (
                <FrontCard key={f.id} f={f} />
              ))}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
