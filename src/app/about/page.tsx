import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import StaggerText from "@/components/stagger-text";
import { findImage, slugify } from "@/lib/media";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
};

const values = [
  {
    n: "01",
    title: "Global Standard",
    body: "Every gemstone is inspected and graded by specialists.",
  },
  {
    n: "02",
    title: "Bespoke by Design",
    body: "Each piece is tailored to the client's identity and story.",
  },
  {
    n: "03",
    title: "True Craftsmanship",
    body: "Finished by experienced artisans, down to the smallest detail.",
  },
];

const teamNames = ["Sarita", "Natha", "Thanakorn"];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  const storyImage = findImage("about", "story");
  const team = teamNames.map((name) => ({
    name,
    image: findImage("team", slugify(name)),
  }));

  return (
    <div>
      <section
        className={`relative overflow-hidden px-6 ${
          storyImage
            ? "flex min-h-[420px] items-center py-24 md:min-h-[520px]"
            : "py-24"
        }`}
      >
        {storyImage && (
          <>
            <Image src={storyImage} alt="" fill priority className="-z-20 object-cover" />
            <div className="photo-scrim absolute inset-0 -z-10" />
          </>
        )}
        <div className="mx-auto w-full max-w-4xl">
          <Reveal>
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                storyImage ? "text-scrim text-tan" : "text-crimson"
              }`}
            >
              About Us
            </p>
            <StaggerText
              as="h1"
              className={`font-display mt-4 block text-5xl font-semibold leading-[0.95] md:text-7xl ${
                storyImage ? "text-scrim text-cream" : "text-ink"
              }`}
              text={`The story behind ${siteConfig.name}`}
            />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16">
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            {siteConfig.name} was founded on a simple belief: the finest jewelry
            reflects the person wearing it. We work with a network of gemstone
            specialists and artisans to curate diamonds, colored stones, and
            precious metals — so every piece holds its value for years to come.
          </p>
          <p className="mt-6 max-w-xl border-l-2 border-crimson pl-4 text-ink">
            เครื่องประดับที่ดีที่สุด คือเครื่องประดับที่บอกเล่าตัวตนของคุณ
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-tan-deep/20 border-t border-tan-deep/20">
          {values.map((value, i) => (
            <Reveal key={value.n} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[4rem_1fr_1fr] md:items-baseline md:gap-6">
                <span className="font-mono text-sm text-crimson">{value.n}</span>
                <h3 className="text-xl font-medium text-ink">{value.title}</h3>
                <p className="max-w-sm text-sm text-ink-soft">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-tan-deep/20 pt-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-crimson">Our Team</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-4xl">
              The people behind {siteConfig.name}
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden bg-[linear-gradient(150deg,var(--color-cream-soft),var(--color-tan)_55%,var(--color-crimson)_130%)] text-lg font-medium text-cream">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      initials(member.name)
                    )}
                  </div>
                  <p className="text-sm text-ink">{member.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
