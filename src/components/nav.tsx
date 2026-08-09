"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tan-deep/30 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-logo text-2xl font-semibold tracking-wide text-crimson"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-crimson" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-tan-deep/30 px-6 py-4 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm tracking-wide ${
                  active ? "text-crimson" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
