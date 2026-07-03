import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Markets } from "@/components/sections/Markets";
import { Differentials } from "@/components/sections/Differentials";
import { SpecialSolutions } from "@/components/sections/SpecialSolutions";
import { Bases } from "@/components/sections/Bases";
import { Clients } from "@/components/sections/Clients";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO escura e cinematográfica → depois clareia (editorial). */}
        <Hero />
        <Manifesto />
        <Markets />
        <Differentials />
        <SpecialSolutions />
        <Bases />
        <Clients />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
