import type { Metadata } from "next";
import Image from "next/image";
import PortfolioCard from "@/components/portfolio-card";
import Reveal from "@/components/reveal";
import StaggerText from "@/components/stagger-text";
import { findImage } from "@/lib/media";
import { getPortfolioItems } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Selected Works — ${siteConfig.name}`,
};

export default function SelectedWorksPage() {
  const headerImage = findImage("selectedworks", "header");

  return (
    <div>
      <section
        className={`relative overflow-hidden px-6 ${
          headerImage
            ? "flex min-h-[360px] items-center py-24 md:min-h-[440px]"
            : "py-24"
        }`}
      >
        {headerImage && (
          <>
            <Image src={headerImage} alt="" fill priority className="-z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
          </>
        )}
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                headerImage ? "text-tan" : "text-crimson"
              }`}
            >
              Selected Works
            </p>
            <StaggerText
              as="h1"
              className={`font-display mt-4 block text-5xl font-semibold leading-[0.95] md:text-7xl ${
                headerImage ? "text-cream" : "text-ink"
              }`}
              text="Curated pieces"
            />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {getPortfolioItems().map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
