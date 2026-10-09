"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const services = [
  "Web Development",
  "Mobile Apps",
  "SaaS",
  "eCommerce",
  "AI & Automation",
  "UI/UX",
  "Cloud & DevOps",
  "Digital Growth",
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const orbitX = useTransform(sx, [-1, 1], [-14, 14]);
  const orbitY = useTransform(sy, [-1, 1], [-10, 10]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (event: PointerEvent) => {
      mx.set((event.clientX / window.innerWidth) * 2 - 1);
      my.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-[calc(3.75rem+env(safe-area-inset-top))] pb-10 sm:pt-24 sm:pb-14 md:min-h-[100svh] md:pt-28 md:pb-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="hero-glow absolute top-[10%] right-[-20%] -z-10 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#18A8E4_28%,transparent),transparent_70%)] blur-2xl sm:h-[360px] sm:w-[360px] md:right-[-8%] md:h-[420px] md:w-[420px]"
        aria-hidden
      />
      <div
        className="hero-glow absolute bottom-[4%] left-[-24%] -z-10 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#1E7EC3_20%,transparent),transparent_70%)] blur-3xl md:left-[-8%]"
        aria-hidden
      />

      <div className="container relative grid items-center gap-7 sm:gap-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-2xl">
          <motion.p
            className="eyebrow mb-3 sm:mb-5"
            initial={reduce ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: easeOut }}
          >
            Digital Product & Technology Studio
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="display text-[1.85rem] leading-[1.08] sm:text-[2.6rem] md:text-6xl lg:text-[4.35rem]"
            initial={reduce ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
          >
            <span className="block text-[var(--text)]">Balkrishna Infotech</span>
            <span className="mt-1.5 block gradient-text sm:mt-2">We Build What&apos;s Next.</span>
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-[0.92rem] leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-base md:text-lg"
            initial={reduce ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: easeOut }}
          >
            We design, engineer and scale digital products — from high-performance websites and
            mobile applications to SaaS platforms, eCommerce ecosystems and AI-powered solutions.
          </motion.p>
          <motion.div
            className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3"
            initial={reduce ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: easeOut }}
          >
            <a href="#project-builder" className="btn btn-primary w-full sm:w-auto">
              Start Your Project
            </a>
            <a href="#work" className="btn btn-secondary w-full sm:w-auto">
              View Our Work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-[280px] sm:block sm:max-w-[380px] lg:max-w-[520px]"
          style={reduce ? undefined : { x: orbitX, y: orbitY }}
          initial={reduce ? false : { opacity: 1, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          aria-hidden
        >
          <div className="relative aspect-square">
            <div className="absolute inset-[12%] rounded-full border border-[color-mix(in_srgb,var(--divider)_80%,transparent)]" />
            <div className="absolute inset-[24%] rounded-full border border-dashed border-[color-mix(in_srgb,var(--brand-blue)_45%,transparent)]" />
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: "50% 50%" }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={reduce ? undefined : { duration: 48, repeat: Infinity, ease: "linear" }}
            >
              {services.slice(0, 6).map((label, i) => {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const r = 42;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <motion.span
                    key={label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--divider)] bg-white/95 px-2.5 py-1.5 text-[0.62rem] font-medium tracking-wide text-[var(--text)] shadow-[0_8px_24px_rgba(36,32,33,0.08)] backdrop-blur md:text-xs"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={reduce ? undefined : { rotate: -360 }}
                    transition={
                      reduce ? undefined : { duration: 48, repeat: Infinity, ease: "linear" }
                    }
                    whileHover={reduce ? undefined : { scale: 1.06 }}
                  >
                    {label}
                  </motion.span>
                );
              })}
            </motion.div>
            <motion.div
              className="absolute inset-[34%] flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--brand-cyan)_45%,transparent)] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,#18A8E4_28%,#ffffff),#ffffff_72%)] shadow-[0_0_50px_color-mix(in_srgb,#1E7EC3_22%,transparent)]"
              animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
              transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-3 text-center sm:px-4">
                <p className="font-[family-name:var(--font-sora)] text-sm font-semibold text-[var(--brand-charcoal)] md:text-base">
                  Product Studio
                </p>
                <p className="mt-1 text-[0.7rem] text-[var(--muted)] md:text-xs">
                  Strategy · Design · Engineering
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container mt-7 border-t border-[var(--divider)] pt-4 sm:mt-10 sm:pt-5">
        <ul className="flex gap-x-3 gap-y-2 overflow-x-auto pb-1 text-[0.7rem] text-[var(--muted)] [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:gap-x-4 sm:text-xs md:text-sm [&::-webkit-scrollbar]:hidden">
          {services.map((item) => (
            <li key={item} className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <span className="h-1 w-1 rounded-full bg-[var(--brand-cyan)]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
