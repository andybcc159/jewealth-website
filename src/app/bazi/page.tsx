import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";

// Standalone share page for the Bazi price sheets — intentionally not in the
// nav or sitemap. Send customers jewealth.co/bazi. To swap a sheet, replace the
// matching file in public/bazi/ (keep the same name, or update `sheets` below).
export const metadata: Metadata = {
  title: "Bazi Ring Price List",
  description:
    "ราคาแหวนแถวปาจื่อ (Bazi Stack Ring) และ Eternity Bazi Ring — price list for Jewealth's Bazi rings.",
  alternates: { canonical: "/bazi" },
};

const sheets = [
  {
    src: "/bazi/stack-ring.jpg",
    width: 1414,
    height: 2000,
    alt: "Bazi Stack Ring แหวนแถวปาจื่อ — ราคาและรายละเอียด",
  },
  {
    src: "/bazi/eternity-ring.jpg",
    width: 1076,
    height: 1522,
    alt: "Eternity Bazi Ring แหวนแถวปาจื่อ — ราคาและแบบที่เลือกได้",
  },
];

export default function BaziPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 py-10 sm:px-6">
      <h1 className="sr-only">Bazi Ring Price List</h1>
      {sheets.map((sheet, i) => (
        <Reveal key={sheet.src} delay={i === 0 ? 0 : 0.05}>
          {/* Opens the full-size image so customers can pinch-zoom the prices */}
          <a href={sheet.src} target="_blank" rel="noopener noreferrer" className="block">
            <Image
              src={sheet.src}
              alt={sheet.alt}
              width={sheet.width}
              height={sheet.height}
              priority={i === 0}
              sizes="(min-width: 672px) 640px, 100vw"
              className="elevate h-auto w-full"
            />
          </a>
        </Reveal>
      ))}
    </div>
  );
}
