"use client";

import type { Variants } from "motion";
import { motion } from "motion/react";
import { useMemo } from "react";

type AnimatedTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  artificialDelay?: number;
};

const CHARACTER_ANIMATION = {
  initial: { opacity: 0, y: 5 },
  animate: (charCount: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: charCount === 1 ? 0.25 : 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
} as const satisfies Variants;

export function AnimatedText({
  text,
  as: Tag = "p",
  className,
  artificialDelay = 0,
}: AnimatedTextProps) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {words.map((word, indexWord) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: cry harder
            key={`${word}-${indexWord}`}
            className="inline-block mr-[0.25em] whitespace-nowrap will-change-transform"
            initial="initial"
            animate="animate"
            transition={{
              delayChildren: indexWord * 0.25 + artificialDelay,
              staggerChildren: 0.025,
            }}
          >
            {[...word].map((character, indexCharacter) => (
              <motion.span
                // biome-ignore lint/suspicious/noArrayIndexKey: cry harder
                key={`${indexWord}-${indexCharacter}`}
                className="inline-block"
                custom={word.length}
                variants={CHARACTER_ANIMATION}
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
