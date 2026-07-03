import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services & Lifecycle Support | MACNOR",
  description:
    "Instalação, comissionamento, manutenção, peças, overhaul e modernização. Suporte técnico 24/7 para ativos marítimos e offshore.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Lifecycle />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
