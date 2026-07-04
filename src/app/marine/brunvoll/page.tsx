import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { BRUNVOLL } from "@/data/content";

export const metadata: Metadata = {
  title: "Brunvoll | MACNOR",
  description:
    "Brunvoll — sistemas noruegueses de propulsão, posicionamento e manobra, representados pela MACNOR no Brasil.",
};

/* Seta de voltar para a página anterior (Marine). */
function BackLink() {
  return (
    <a
      href="/marine"
      className="inline-flex items-center gap-2 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
    >
      <span aria-hidden className="text-accent">&larr;</span>
      Voltar
    </a>
  );
}

export default function BrunvollPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO — close-up do propulsor (id=top → header transparente). */}
        <section
          id="top"
          className="relative flex min-h-[82vh] items-end overflow-hidden bg-dark"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brunvoll/hero.jpg"
            alt="Propulsor Brunvoll em operação"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" />
          <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-16 pt-28 md:px-10 md:pb-20">
            <BackLink />
            <div className="mt-8">
              <SectionLabel tone="dark">Marca representada · {BRUNVOLL.origin}</SectionLabel>
              <h1 className="mt-5 font-sans text-6xl font-semibold tracking-tight text-white md:text-8xl">
                {BRUNVOLL.name}
              </h1>
              <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-white/80 md:text-lg">
                {BRUNVOLL.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* SOBRE — texto + imagem (água). */}
        <section className="surface-light px-6 py-24 md:px-10 md:py-32">
          <AnimatedSection className="mx-auto grid max-w-[1320px] items-center gap-12 md:grid-cols-2 md:gap-16">
            <AnimatedItem className="flex flex-col gap-6">
              <SectionLabel>A marca</SectionLabel>
              <h2 className="max-w-[18ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
                {BRUNVOLL.lead}
              </h2>
              <p className="max-w-[52ch] text-base leading-relaxed text-graphite">
                {BRUNVOLL.about}
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="overflow-hidden rounded-2xl ring-1 ring-deep/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brunvoll/water.jpg"
                  alt="Superfície do mar"
                  loading="lazy"
                  className="h-[300px] w-full object-cover md:h-[440px]"
                />
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </section>

        {/* LINHA DE PRODUTOS — cards imagéticos. */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-28">
          <AnimatedSection className="mx-auto max-w-[1320px]">
            <AnimatedItem>
              <SectionLabel>Linha de produtos</SectionLabel>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-5 max-w-[22ch] font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-deep md:text-5xl">
                Uma única fonte para todo o sistema.
              </h2>
            </AnimatedItem>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BRUNVOLL.products.map((p) => (
                <AnimatedItem
                  key={p.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-32px_rgba(16,24,63,0.4)]"
                >
                  <div className="flex h-56 items-center justify-center bg-light p-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-7">
                    <h3 className="font-sans text-lg font-semibold tracking-tight text-deep">
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-graphite">{p.desc}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* FECHAMENTO — representação MACNOR. */}
        <section className="surface-dark px-6 py-24 md:px-10 md:py-32">
          <AnimatedSection className="mx-auto flex max-w-[900px] flex-col items-center gap-7 text-center">
            <AnimatedItem>
              <SectionLabel tone="dark">Brunvoll + MACNOR</SectionLabel>
            </AnimatedItem>
            <AnimatedItem>
              <p className="max-w-[46ch] font-sans text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
                {BRUNVOLL.represented}
              </p>
            </AnimatedItem>
            <AnimatedItem className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contato" tone="dark">Falar com a MACNOR</Button>
              <Button href="/marine" variant="outline" tone="dark">Voltar para Marine</Button>
            </AnimatedItem>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
