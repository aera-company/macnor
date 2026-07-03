import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Atualize metadataBase com o domínio de produção da MACNOR
// para gerar canonical / Open Graph absolutos.
export const metadata: Metadata = {
  title: "MACNOR | Engenharia, Sistemas e Serviços Marine & Offshore",
  description:
    "Tecnologia marítima internacional, engenharia brasileira e suporte técnico para projetar, equipar, manter e modernizar embarcações e operações offshore.",
  metadataBase: new URL("https://macnor.com.br"),
  openGraph: {
    title: "MACNOR | Do projeto ao ciclo de vida",
    description:
      "Tecnologia global. Engenharia local. Performance por todo o ciclo de vida.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
