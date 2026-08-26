"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

export default function LinkButton({
  href,
  label,
  sublabel,
  icon,
  featured = false,
  external = true,
}: {
  href: string;
  label: string;
  sublabel?: string;
  icon: ReactNode;
  featured?: boolean;
  external?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 240,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 240,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      whileTap={{ scale: 0.97 }}
      className={`elevate flex w-full items-center gap-4 px-6 py-4 transition-colors ${
        featured
          ? "btn-glow bg-crimson text-cream"
          : "border border-tan-deep/30 bg-cream-soft text-ink hover:border-crimson"
      }`}
    >
      <span className={`text-xl ${featured ? "text-cream" : "text-crimson"}`}>{icon}</span>
      <span className="flex-1 text-left">
        <span className="block text-sm font-medium tracking-wide">{label}</span>
        {sublabel && (
          <span className={`block text-xs ${featured ? "text-cream/70" : "text-ink-soft"}`}>
            {sublabel}
          </span>
        )}
      </span>
    </motion.a>
  );
}
