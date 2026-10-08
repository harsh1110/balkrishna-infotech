"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
};

export function InteractiveCard({
  children,
  className = "",
  as = "article",
}: InteractiveCardProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${x}px ${y}px, color-mix(in srgb, #18A8E4 16%, transparent), transparent 55%)`;

  function onMove(event: PointerEvent<HTMLElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const shared = {
    className: `group surface-card interactive-card relative h-full overflow-hidden ${className}`,
    onPointerMove: onMove,
    whileHover: reduce ? undefined : { y: -4 },
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  };

  const inner = (
    <>
      {!reduce ? (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      ) : null}
      <div className="relative z-[1] h-full">{children}</div>
    </>
  );

  if (as === "li") {
    return <motion.li {...shared}>{inner}</motion.li>;
  }
  if (as === "div") {
    return <motion.div {...shared}>{inner}</motion.div>;
  }
  return <motion.article {...shared}>{inner}</motion.article>;
}
