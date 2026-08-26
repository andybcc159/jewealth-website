import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import StaggerText from "@/components/stagger-text";
import { findImage, findImages } from "@/lib/media";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Catalogue — ${siteConfig.name}`,
};

export default function CataloguePage() {
  const headerImage = findImage("catalogue", "header");
  const pages = findImages("catalogue").filter(
    (src) => !/\/header\.[a-z]+$/i.test(src)
  );

  return (
    <div>
      <section
        className={`relative overflow-hidden px-6 ${
          headerImage
            ? "flex min-h-[280px] items-center py-10 md:min-h-[340px]"
            : "pb-6 pt-10"
        }`}
      >
        {headerImage && (
          <Image src={headerImage} alt="" fill priority className="-z-20 object-cover" />
        )}
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div
              className={`max-w-xl ${headerImage ? "text-panel px-6 py-8 md:px-10 md:py-12" : ""}`}
            >
              <p
                className={`text-xs uppercase tracking-[0.3em] ${
                  headerImage ? "text-tan" : "text-crimson"
                }`}
              >
                Catalogue
              </p>
              <StaggerText
                as="h1"
                className={`font-display mt-4 block text-5xl font-semibold leading-[0.95] md:text-6xl ${
                  headerImage ? "text-cream" : "text-ink"
                }`}
                text="Design guide & catalogue"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-24 pt-4">
        {pages.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pages.map((src, i) => (
              <Reveal key={src} delay={(i % 6) * 0.06}>
                <div className="elevate relative aspect-[3/4] overflow-hidden bg-cream-soft">
                  <Image
                    src={src}
                    alt={`Catalogue page ${i + 1}`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="text-center text-ink-soft">
              แคตตาล็อกกำลังจะมาเร็วๆ นี้ — วางไฟล์รูปที่ export จาก Canva ไว้ที่{" "}
              <code className="text-crimson">public/catalogue/1.jpg, 2.jpg, ...</code>
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
