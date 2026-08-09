import type { Metadata } from "next";
import { Cormorant_Garamond, Chakra_Petch, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jewealth — Jewelry & Gems Curator",
  description:
    "Jewealth curates fine jewelry and gemstones with bespoke design — คิวเรทเครื่องประดับและอัญมณีคุณภาพสูง ออกแบบเฉพาะบุคคล",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${chakra.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
