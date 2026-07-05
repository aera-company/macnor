import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Partners } from "@/components/sections/Partners";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { MARINE } from "@/data/content";

export const metadata: Metadata = {
  title: "Marine | MACNOR",
  description:
    "Engenharia, sistemas e soluções para embarcações — e as marcas globais que a MACNOR representa com suporte técnico local.",
};

export default function MarinePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero banner (id="top" → header transparente sobre ele). */}
        <section
          id="top"
          className="relative flex min-h-[80vh] items-end overflow-hidden bg-dark"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MARINE.poster}
            alt="Embarcação Marine da MACNOR"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/25" />

          <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-20 pt-32 md:px-10 md:pb-24">
            <SectionLabel tone="dark">{MARINE.eyebrow}</SectionLabel>
            <h1 className="mt-5 max-w-[20ch] font-sans text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl">
              {MARINE.headline}
            </h1>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/75 md:text-lg">
              {MARINE.text}
            </p>
            <ul className="mt-8 grid max-w-[640px] gap-x-8 gap-y-3 sm:grid-cols-2">
              {MARINE.topics.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#contato" tone="dark">Falar com a MACNOR</Button>
              <Button href="/" variant="outline" tone="dark">Voltar à home</Button>
            </div>
          </div>
        </section>

        {/* Marcas e parceiros (agora dentro de Marine). */}
        <Partners />

        {/* Voltar para a página anterior. */}
        <div className="bg-white px-6 md:px-10">
          <div className="mx-auto max-w-[1320px] border-t border-border py-10 md:py-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 py-2 text-sm font-medium text-graphite transition-colors hover:text-accent"
            >
              <span aria-hidden className="text-accent">&larr;</span>
              Voltar
            </a>
          </div>
        </div>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
