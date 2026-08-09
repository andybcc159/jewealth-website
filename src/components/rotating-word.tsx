"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function RotatingWord({
  words,
  wordClassName = "text-crimson",
}: {
  words: string[];
  wordClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  // Reserve layout space for the widest word so cycling never shifts surrounding text.
  const longest = useMemo(
    () => words.reduce((a, b) => (b.length > a.length ? b : a), words[0]),
    [words]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
      <span className="invisible" aria-hidden="true">
        {longest}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 ${wordClassName}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
