import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cormorant_Garamond, Chakra_Petch, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import Nav from "@/components/nav";
import { siteConfig } from "@/lib/site-config";

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

const description =
  "Jewealth curates fine jewelry and gemstones with bespoke design in Bangkok — คิวเรทเครื่องประดับและอัญมณีคุณภาพสูง ออกแบบเครื่องประดับสั่งทำเฉพาะบุคคล ที่กรุงเทพฯ";
const fullTitle = `${siteConfig.name} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: fullTitle,
    template: "%s — Jewealth",
  },
  description,
  keywords: [
    "Jewealth",
    "custom jewelry Bangkok",
    "bespoke jewelry Thailand",
    "gemstone jewelry",
    "sapphire ring",
    "เครื่องประดับสั่งทำ",
    "เครื่องประดับ กรุงเทพ",
    "อัญมณี",
    "แหวนพลอย",
    "แหวนแถวปาจื่อ",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: fullTitle,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
        <JsonLd />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
    </html>
  );
}
