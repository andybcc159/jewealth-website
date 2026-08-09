import Image from "next/image";
import Link from "next/link";
import ParallaxBg from "@/components/parallax-bg";
import PortfolioCard from "@/components/portfolio-card";
import Reveal from "@/components/reveal";
import RotatingWord from "@/components/rotating-word";
import StaggerText from "@/components/stagger-text";
import { findImage } from "@/lib/media";
import { getPortfolioItems } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site-config";

const services = [
  {
    n: "01",
    title: "Gemstone Curation",
    thai: "คัดสรรอัญมณีอย่างพิถีพิถัน",
    body: "Precious colored stones and diamond sourced and graded by specialists.",
  },
  {
    n: "02",
    title: "Bespoke Design",
    thai: "ออกแบบเฉพาะบุคคล",
    body: "Every piece designed around your story, not a catalogue.",
  },
  {
    n: "03",
    title: "Fine Craftsmanship",
    thai: "งานฝีมือโดยผู้เชี่ยวชาญ",
    body: "Hand-finished by artisans, built to last generations.",
  },
];

const heroGradient =
  "radial-gradient(60% 55% at 80% 10%, color-mix(in srgb, var(--color-tan) 55%, transparent), transparent), radial-gradient(50% 45% at 15% 30%, color-mix(in srgb, var(--color-crimson) 12%, transparent), transparent), linear-gradient(180deg, var(--color-cream), var(--color-cream-soft))";

const ctaGradient =
  "radial-gradient(45% 60% at 90% 50%, color-mix(in srgb, var(--color-crimson) 14%, transparent), transparent), var(--color-cream-soft)";

export default function Home() {
  const featured = getPortfolioItems().slice(0, 3);
  const heroImage = findImage("hero", "main");
  const ctaImage = findImage("cta", "banner");

  return (
    <div>
      <section className="relative flex min-h-[600px] items-center overflow-hidden md:min-h-[760px]">
        {heroImage ? (
          <Image src={heroImage} alt="" fill priority className="-z-20 object-cover" />
        ) : (
          <ParallaxBg background={heroGradient} />
        )}
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div
            className={`flex max-w-2xl flex-col items-start gap-6 ${
              heroImage ? "text-panel px-6 py-8 md:px-10 md:py-12" : ""
            }`}
          >
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                heroImage ? "text-tan" : "text-crimson"
              }`}
            >
              {siteConfig.tagline}
            </p>
            <h1
              className={`font-display text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl ${
                heroImage ? "text-cream" : "text-ink"
              }`}
            >
              <StaggerText as="span" className="block" text="Jewelry that" />
              <span className="block">
                <StaggerText as="span" text="tells your" delay={0.15} />{" "}
                <RotatingWord
                  words={["story", "legacy", "identity"]}
                  wordClassName={heroImage ? "text-crimson text-glow" : "text-crimson"}
                />
              </span>
            </h1>
            <p className={`text-sm ${heroImage ? "text-cream/80" : "text-ink-soft"}`}>
              {siteConfig.taglineThai}
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Link
                href="/contact"
                className="btn-glow inline-block bg-crimson px-8 py-3 text-sm tracking-wide text-cream"
              >
                Get in Touch
              </Link>
              <Link
                href="/selectedworks"
                className={`text-sm tracking-wide underline decoration-tan-deep underline-offset-4 hover:text-crimson ${
                  heroImage ? "text-cream/80" : "text-ink-soft"
                }`}
              >
                View Selected Works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-tan-deep/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display max-w-2xl text-4xl font-semibold leading-tight text-ink md:text-6xl">
              What we do
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-tan-deep/20 border-t border-tan-deep/20">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[4rem_1fr_1fr] md:items-baseline md:gap-6">
                  <span className="font-mono text-sm text-crimson">{s.n}</span>
                  <div>
                    <h3 className="text-2xl font-medium text-ink md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-ink-soft/60">
                      {s.thai}
                    </p>
                  </div>
                  <p className="max-w-sm text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-tan-deep/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                Featured Work
              </h2>
              <Link
                href="/selectedworks"
                className="text-xs uppercase tracking-widest text-ink-soft hover:text-crimson"
              >
                View All →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {featured.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.1}>
                <PortfolioCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-tan-deep/20 px-6 py-28">
        {ctaImage ? (
          <Image src={ctaImage} alt="" fill className="-z-20 object-cover" />
        ) : (
          <ParallaxBg background={ctaGradient} range={80} />
        )}
        <Reveal className="mx-auto max-w-6xl">
          <div
            className={`flex max-w-xl flex-col items-start gap-8 ${
              ctaImage ? "text-panel px-6 py-8 md:px-10 md:py-12" : ""
            }`}
          >
            <h2
              className={`font-display text-4xl font-semibold leading-tight md:text-6xl ${
                ctaImage ? "text-cream" : "text-ink"
              }`}
            >
              Let&rsquo;s create your piece.
            </h2>
            <Link
              href="/contact"
              className="btn-glow inline-block bg-crimson px-8 py-3 text-sm tracking-wide text-cream"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
