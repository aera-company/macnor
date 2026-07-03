import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { VideoMedia } from "@/components/ui/VideoMedia";
import { SERVICES } from "@/data/content";

// "Em campo": 1 foto + 2 vídeos (hover-play).
const FIELD_ITEMS = [
  { type: "image" as const, image: "/images/services-1.jpg", label: "Operação assistida" },
  { type: "video" as const, src: "/videos/service-2.mp4", poster: "/videos/service-2.jpg", label: "Manutenção e overhaul" },
  { type: "video" as const, src: "/videos/service-3.mp4", poster: "/videos/service-3.jpg", label: "Comissionamento em campo" },
];

export function Lifecycle() {
  return (
    <>
      {/* 1 · HERO (escuro, foto) — id=top deixa o header transparente. */}
      <section
        id="top"
        className="relative flex min-h-[88vh] items-end overflow-hidden bg-dark"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services-hero.jpg"
          alt="Equipe técnica da MACNOR em operação"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/25" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-20 pt-32 md:px-10 md:pb-28">
          <SectionLabel tone="dark">{SERVICES.eyebrow}</SectionLabel>
          <h1 className="mt-5 max-w-[18ch] font-sans text-4xl font-semibold leading-[1.0] tracking-tight text-white md:text-7xl">
            {SERVICES.headline}
          </h1>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/75 md:text-lg">
            {SERVICES.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contato" tone="dark">Falar com a MACNOR</Button>
            <Button href="/" variant="outline" tone="dark">Voltar à home</Button>
          </div>
        </div>
      </section>

      {/* 2 · INTRO + vídeo em destaque (claro). */}
      <section className="surface-light px-6 py-24 md:px-10 md:py-32">
        <AnimatedSection className="mx-auto grid max-w-[1320px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <AnimatedItem>
            <div className="group relative h-[300px] overflow-hidden rounded-2xl ring-1 ring-deep/10 md:h-[440px]">
              <VideoMedia
                src="/videos/service-1.mp4"
                poster="/videos/service-1.jpg"
                label="Operação assistida MACNOR"
                className="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/35 to-transparent" />
            </div>
          </AnimatedItem>
          <AnimatedItem className="flex flex-col gap-5">
            <SectionLabel>Antes, durante e depois</SectionLabel>
            <h2 className="max-w-[18ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-4xl">
              Suporte que acompanha o ativo por todo o ciclo.
            </h2>
            <p className="max-w-[50ch] text-base leading-relaxed text-graphite">
              Engenharia, equipes locais, acesso direto aos fabricantes, peças e
              logística — com atendimento técnico 24/7 onde a operação acontece.
            </p>
            <div className="mt-1">
              <Button href="#contato" variant="outline">Solicitar suporte técnico</Button>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </section>

      {/* 3 · CICLO DE VIDA (branco). */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <AnimatedSection className="mx-auto max-w-[1320px]">
          <AnimatedItem>
            <SectionLabel>Ciclo de vida do ativo</SectionLabel>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-5 max-w-[22ch] font-sans text-2xl font-semibold leading-tight tracking-tight text-deep md:text-4xl">
              Do diagnóstico ao retrofit, em uma cadeia contínua.
            </h2>
          </AnimatedItem>
          <AnimatedSection className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
            {SERVICES.cycle.map((step, i) => (
              <AnimatedItem key={step} className="flex items-center gap-3">
                <span className="flex items-center gap-2.5 rounded-full border border-border bg-light px-4 py-2 text-sm text-deep transition-colors duration-300 hover:border-accent">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
                {i < SERVICES.cycle.length - 1 && (
                  <span aria-hidden className="text-accent/70">
                    &rarr;
                  </span>
                )}
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </AnimatedSection>
      </section>

      {/* 4 · ESCOPO DE SERVIÇOS (claro). */}
      <section className="surface-light px-6 py-20 md:px-10 md:py-28">
        <AnimatedSection className="mx-auto max-w-[1320px]">
          <AnimatedItem>
            <SectionLabel>Escopo de serviços</SectionLabel>
          </AnimatedItem>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.highlights.map((s) => (
              <AnimatedItem
                key={s}
                className="flex items-center gap-3 bg-white px-6 py-5 transition-colors duration-300 hover:bg-light"
              >
                <span aria-hidden className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span className="text-sm text-deep">{s}</span>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 5 · EM CAMPO — vídeos (escuro, hover-play). */}
      <section className="surface-darkest px-6 py-24 md:px-10 md:py-32">
        <AnimatedSection className="mx-auto max-w-[1320px]">
          <AnimatedItem>
            <SectionLabel tone="dark">Em campo</SectionLabel>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="mt-5 max-w-[22ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
              Capacidade técnica em operação.
            </h2>
          </AnimatedItem>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {FIELD_ITEMS.map((item) => (
              <AnimatedItem key={item.label}>
                <div className="group relative h-[300px] overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-300 hover:ring-white/25 md:h-[360px]">
                  {item.type === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.label}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <VideoMedia
                      src={item.src}
                      poster={item.poster}
                      label={item.label}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-sans text-lg font-medium tracking-tight text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
