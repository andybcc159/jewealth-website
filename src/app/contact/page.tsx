import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import StaggerText from "@/components/stagger-text";
import { findImage } from "@/lib/media";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
};

export default function ContactPage() {
  const headerImage = findImage("contact", "header");

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
            <div className="photo-scrim absolute inset-0 -z-10" />
          </>
        )}
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                headerImage ? "text-scrim text-tan" : "text-crimson"
              }`}
            >
              Contact
            </p>
            <StaggerText
              as="h1"
              className={`font-display mt-4 block text-5xl font-semibold leading-[0.95] md:text-7xl ${
                headerImage ? "text-scrim text-cream" : "text-ink"
              }`}
              text="Let's talk"
            />
            <p className={`mt-4 ${headerImage ? "text-scrim text-cream/80" : "text-ink-soft"}`}>
              ยินดีให้คำปรึกษาเรื่องเครื่องประดับของคุณ
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal delay={0.1}>
          <h2 className="text-2xl font-medium text-ink">Get in Touch</h2>
          <dl className="mt-6 space-y-4 text-ink-soft">
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/70">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-crimson">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/70">
                LINE
              </dt>
              <dd className="mt-1">{siteConfig.line}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/70">
                Location
              </dt>
              <dd className="mt-1">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/70">
                Social
              </dt>
              <dd className="mt-1 flex gap-4">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-crimson">
                  Instagram
                </a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-crimson">
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.18}>
          <h2 className="text-2xl font-medium text-ink">Visit Us</h2>
          <p className="mt-2 text-sm text-ink-soft">{siteConfig.address}</p>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs uppercase tracking-widest text-crimson hover:text-ink"
          >
            Get Directions →
          </a>

          <div className="mt-4 border-l-2 border-crimson bg-cream-soft px-4 py-3 text-sm text-ink">
            <p>กรุณานัดล่วงหน้าก่อนเข้าชมหน้าร้าน</p>
            <p className="mt-1 text-ink-soft">
              Please make an appointment before visiting the store.
            </p>
          </div>

          <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-tan-deep/30">
            <iframe
              title="Jewealth location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapEmbedQuery)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
      </div>
    </div>
  );
}
