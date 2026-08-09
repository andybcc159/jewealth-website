"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

export default function StaggerText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
