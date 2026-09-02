import type { Metadata } from "next";
import Image from "next/image";
import { FiBookOpen } from "react-icons/fi";
import { SiFacebook, SiInstagram, SiLine, SiShopee, SiTiktok } from "react-icons/si";
import LinkButton from "@/components/link-button";
import Reveal from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Links",
  description:
    "ช่องทางการติดต่อและสั่งซื้อทั้งหมดของ Jewealth — every way to reach Jewealth: catalogue, LINE, Instagram, and Shopee.",
  alternates: { canonical: "/links" },
};

const links = [
  {
    label: "Catalogue & Design Guide",
    sublabel: "ดูแคตตาล็อกและผลงานทั้งหมด",
    href: "/catalogue",
    icon: <FiBookOpen />,
    featured: true,
    external: false,
  },
  {
    label: "สั่งซื้อผ่าน LINE",
    sublabel: "แชทสั่งทำเครื่องประดับกับเราได้เลย",
    href: siteConfig.lineUrl,
    icon: <SiLine />,
  },
  {
    label: "Order via Instagram",
    sublabel: "DM สั่งซื้อผ่าน Instagram",
    href: siteConfig.instagram,
    icon: <SiInstagram />,
  },
  {
    label: "สินค้าพร้อมส่ง Shopee",
    sublabel: "ช้อปสินค้าพร้อมส่งได้ที่ Shopee",
    href: siteConfig.shopee,
    icon: <SiShopee />,
  },
];

const socials = [
  { label: "Instagram", href: siteConfig.instagram, Icon: SiInstagram },
  { label: "Facebook", href: siteConfig.facebook, Icon: SiFacebook },
  { label: "TikTok", href: siteConfig.tiktok, Icon: SiTiktok },
];

export default function LinksPage() {
  return (
    <div className="min-h-[80vh] px-6 py-16">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <Reveal>
          <h1 className="sr-only">{siteConfig.name}</h1>
          <div className="glow-ring mx-auto flex w-fit items-center justify-center rounded-full border border-crimson/20 bg-cream px-9 py-5">
            <Image
              src="/brand/wordmark.png"
              alt={siteConfig.name}
              width={144}
              height={40}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Bespoke Gem Jewelry in Bangkok · 10+ years experience
            <br />
            Pick your gems, crafted by masters — Platinum · Gold 9K/14K/18K · Silver
            <br />
            ✈️ Worldwide Shipping
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-tan-deep/40 text-ink-soft transition-colors hover:border-crimson hover:text-crimson"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex w-full flex-col gap-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={0.15 + i * 0.06}>
              <LinkButton {...l} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
