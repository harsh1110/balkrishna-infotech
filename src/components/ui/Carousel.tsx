"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  autoPlayMs?: number;
  showDots?: boolean;
  ariaLabel: string;
};

export function Carousel<T>({
  items,
  renderItem,
  className = "",
  autoPlayMs = 0,
  showDots = true,
  ariaLabel,
}: CarouselProps<T>) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const count = items.length;

  const go = useCallback(
    (next: number) => {
      setIndex((prev) => (next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!autoPlayMs || reduce || count < 2) return;
    const id = window.setInterval(() => go(index + 1), autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, count, go, index, reduce]);

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -60) go(index + 1);
    else if (info.offset.x > 60) go(index - 1);
  }

  return (
    <div className={`carousel ${className}`} aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="relative overflow-hidden rounded-[1.25rem] border border-[var(--divider)] bg-white/70 backdrop-blur">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="touch-pan-y"
            initial={reduce ? false : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -36 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={onDragEnd}
          >
            {renderItem(items[index], index)}
          </motion.div>
        </AnimatePresence>

        {count > 1 ? (
          <>
            <button
              type="button"
              className="carousel-nav left-3"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-nav right-3"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {showDots && count > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Slides">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-[linear-gradient(90deg,#1E7EC3,#18A8E4)]"
                  : "w-2.5 bg-[var(--divider)] hover:bg-[var(--brand-blue)]/40"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
