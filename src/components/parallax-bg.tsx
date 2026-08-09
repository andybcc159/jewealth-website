"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBg({
  background,
  range = 140,
}: {
  background: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, range]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y, background }}
        className="absolute -inset-x-10 -top-24 -bottom-24"
      />
    </div>
  );
}
