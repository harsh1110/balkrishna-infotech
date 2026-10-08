"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

const blobs = [
  {
    className: "left-[-12%] top-[8%] h-[42vw] max-h-[420px] w-[42vw] max-w-[420px] bg-[#18A8E4]/30",
    duration: 18,
  },
  {
    className: "right-[-10%] top-[18%] h-[38vw] max-h-[380px] w-[38vw] max-w-[380px] bg-[#1E7EC3]/24",
    duration: 22,
  },
  {
    className: "bottom-[8%] left-[18%] h-[34vw] max-h-[340px] w-[34vw] max-w-[340px] bg-[#18A8E4]/18",
    duration: 26,
  },
];

const dots = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.4,
}));

export function AmbientBackground() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 40, damping: 20 });
  const springY = useSpring(y, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (event: PointerEvent) => {
      x.set((event.clientX / window.innerWidth - 0.5) * 28);
      y.set((event.clientY / window.innerHeight - 0.5) * 28);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_42%,#eef5fa_100%)]" />
      <div className="mesh-grid absolute inset-0 opacity-40" />

      <motion.div className="absolute inset-0" style={reduce ? undefined : { x: springX, y: springY }}>
        {blobs.map((blob) => (
          <motion.div
            key={blob.className}
            className={`aurora-blob absolute rounded-full blur-3xl ${blob.className}`}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -18, 12, 0],
                    scale: [1, 1.06, 0.97, 1],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: blob.duration, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}
      </motion.div>

      <div className="absolute inset-0">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="floating-dot absolute rounded-full bg-[var(--brand-cyan)]/40"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </div>
  );
}
