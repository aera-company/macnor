import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LogoPlaceholder } from "@/components/ui/Placeholder";
import {
  CLIENTS_INTRO,
  CLIENTS,
  ECOSYSTEM_INTRO,
  ECOSYSTEM,
} from "@/data/content";

export function Clients() {
  // Sem logos definidos ainda → mostra placeholders marcados.
  const hasLogos = CLIENTS.length > 0;
  const placeholders = Array.from({ length: 12 });

  return (
    <section className="surface-light scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1320px]">
        <AnimatedItem>
          <SectionLabel>{CLIENTS_INTRO.eyebrow}</SectionLabel>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="mt-5 max-w-[22ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
            {CLIENTS_INTRO.headline}
          </h2>
        </AnimatedItem>

        <AnimatedItem className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {hasLogos
              ? CLIENTS.map((c) => (
                  <div
                    key={c.name}
                    className={`flex h-24 items-center justify-center rounded-xl border border-border bg-white transition-colors duration-300 hover:border-accent/40 ${
                      c.big ? "p-3" : "p-5"
                    }`}
                    title={c.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.file}
                      alt={c.name}
                      loading="lazy"
                      className={`${
                        c.big
                          ? "max-h-20"
                          : c.small
                            ? "max-h-[2.7rem]"
                            : "max-h-12"
                      } max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100`}
                    />
                  </div>
                ))
              : placeholders.map((_, i) => (
                  <div
                    key={i}
                    className="flex h-24 items-center justify-center rounded-xl bg-white p-5"
                  >
                    <LogoPlaceholder />
                  </div>
                ))}
          </div>
        </AnimatedItem>

        {/* Ecossistemas / associações */}
        <AnimatedItem className="mt-20 md:mt-28">
          <div className="brand-rule mx-auto max-w-[120px]" />
          <h3 className="mx-auto mt-8 max-w-[26ch] text-center font-sans text-xl font-semibold tracking-tight text-deep md:text-3xl">
            {ECOSYSTEM_INTRO.headline}
          </h3>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
            {ECOSYSTEM.map((e) => (
              <div key={e.name} className="flex h-20 items-center justify-center" title={e.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.file}
                  alt={e.name}
                  loading="lazy"
                  className="max-h-16 max-w-[200px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
