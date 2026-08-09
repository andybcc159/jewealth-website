import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { getPortfolioItem, getPortfolioSlugs } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) return {};
  return { title: `${item.title} — ${siteConfig.name}` };
}

export default async function SelectedWorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Link
          href="/selectedworks"
          className="text-xs uppercase tracking-widest text-ink-soft hover:text-crimson"
        >
          ← Selected Works
        </Link>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-crimson">
          {item.category} <span className="text-ink-soft/60">· {item.categoryThai}</span>
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-[0.95] text-ink md:text-6xl">
          {item.title}
        </h1>
        <p className="mt-2 text-lg text-ink-soft">{item.titleThai}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {item.images.length > 0 ? (
            item.images.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className="elevate relative aspect-[4/5] overflow-hidden bg-cream-soft">
                  <Image
                    src={src}
                    alt={`${item.title} ${i + 1}`}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))
          ) : (
            <div className="elevate relative aspect-[4/5] overflow-hidden bg-[linear-gradient(150deg,var(--color-cream-soft),var(--color-tan)_55%,var(--color-crimson)_130%)] sm:col-span-2">
              <div className="flex h-full w-full items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-cream/80">
                  <path d="M6 3h12l3 5-9 13L3 8l3-5Z" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M3 8h18M9 3l3 5 3-5M12 8l-3 13M12 8l3 13"
                    stroke="currentColor"
                    strokeWidth="0.75"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <Reveal delay={0.1}>
          <dl className="space-y-5 border-t border-tan-deep/20 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/60">Gemstone</dt>
              <dd className="mt-1 text-ink">{item.gemstone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/60">
                Available Setting
              </dt>
              <dd className="mt-1 text-ink">{item.availableSetting}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/60">
                Starting Price
              </dt>
              <dd className="mt-1 text-lg font-medium text-crimson">{item.startingPrice}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-soft/60">Details</dt>
              <dd className="mt-1 leading-relaxed text-ink-soft">{item.description}</dd>
            </div>
          </dl>

          <Link
            href="/contact"
            className="btn-glow mt-8 inline-block bg-crimson px-8 py-3 text-sm tracking-wide text-cream"
          >
            Enquire About This Piece
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
