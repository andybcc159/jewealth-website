import { FiMail } from "react-icons/fi";
import { SiFacebook, SiInstagram, SiLine } from "react-icons/si";
import { siteConfig } from "@/lib/site-config";

const channels = [
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: FiMail },
  { label: "LINE", href: siteConfig.lineUrl, Icon: SiLine },
  { label: "Instagram", href: siteConfig.instagram, Icon: SiInstagram },
  { label: "Facebook", href: siteConfig.facebook, Icon: SiFacebook },
];

export default function Footer() {
  return (
    <footer className="border-t border-tan-deep/30 bg-cream-soft px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-logo text-lg font-semibold text-crimson">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-ink-soft">{siteConfig.location}</p>
        </div>

        <div className="flex gap-3">
          {channels.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center border border-tan-deep/40 text-ink-soft transition-colors hover:border-crimson hover:text-crimson"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-tan-deep/20 pt-6 text-center text-xs text-ink-soft/60 md:text-left">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
