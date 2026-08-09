"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import type { PortfolioItem } from "@/lib/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const cover = item.images[0];

  return (
    <Link href={`/selectedworks/${item.slug}`} className="block">
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="group elevate"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-soft">
          {cover ? (
            <Image
              src={cover}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,var(--color-cream-soft),var(--color-tan)_55%,var(--color-crimson)_130%)] opacity-90">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-cream/80">
                <path d="M6 3h12l3 5-9 13L3 8l3-5Z" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M3 8h18M9 3l3 5 3-5M12 8l-3 13M12 8l3 13"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
              </svg>
            </div>
          )}

          <motion.div
            className="absolute inset-0 z-10 bg-ink"
            style={{ transformOrigin: "right" }}
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
        <div className="pt-4">
          <p className="text-xs uppercase tracking-widest text-crimson">
            {item.category} <span className="text-ink-soft/60">· {item.categoryThai}</span>
          </p>
          <h3 className="text-xl font-medium text-ink">{item.title}</h3>
          <p className="text-sm text-ink-soft">{item.titleThai}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-ink-soft/60">
            {item.gemstone}
          </p>
          <p className="mt-2 text-sm font-medium text-ink">
            Starting at <span className="text-crimson">{item.startingPrice}</span>
          </p>
          <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
        </div>
      </motion.article>
    </Link>
  );
}
