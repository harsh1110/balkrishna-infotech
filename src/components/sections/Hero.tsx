"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, type ReactNode } from "react";

type OrbitService = {
  label: string;
  short: string;
  icon: ReactNode;
};

function IconWeb() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="none" aria-hidden>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconSaas() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="none" aria-hidden>
      <path
        d="M7 17a4 4 0 1 1 .7-7.9A5 5 0 0 1 17.5 11 3.5 3.5 0 1 1 17 17H7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="none" aria-hidden>
      <path
        d="M3.5 5h2l1.2 9.2a1.5 1.5 0 0 0 1.5 1.3h8.4a1.5 1.5 0 0 0 1.5-1.2L19.5 8H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.2" fill="currentColor" />
      <circle cx="16.5" cy="19" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconAi() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="none" aria-hidden>
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] sm:h-5 sm:w-5" fill="none" aria-hidden>
      <path
        d="M4 20l5.2-1.2L19 9a2.1 2.1 0 0 0-3-3L6.2 15.8 4 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14.2 7.8l2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const orbitServices: OrbitService[] = [
  { label: "Web Development", short: "Web", icon: <IconWeb /> },
  { label: "Mobile Apps", short: "Apps", icon: <IconMobile /> },
  { label: "SaaS", short: "SaaS", icon: <IconSaas /> },
  { label: "eCommerce", short: "Shop", icon: <IconCart /> },
  { label: "AI & Automation", short: "AI", icon: <IconAi /> },
  { label: "UI/UX", short: "UX", icon: <IconDesign /> },
];

const proofStrip = [
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
const orbitDuration = 48;

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
      if (window.matchMedia("(pointer: coarse)").matches) return;
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

      <div className="container relative grid items-center gap-8 sm:gap-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
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
          className="relative mx-auto w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[520px]"
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
              className="hero-orbit absolute inset-0"
              style={{ transformOrigin: "50% 50%" }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={
                reduce ? undefined : { duration: orbitDuration, repeat: Infinity, ease: "linear" }
              }
            >
              {orbitServices.map((service, i) => {
                const angle = (i / orbitServices.length) * Math.PI * 2 - Math.PI / 2;
                const r = 42;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <motion.div
                    key={service.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={reduce ? undefined : { rotate: -360 }}
                    transition={
                      reduce
                        ? undefined
                        : { duration: orbitDuration, repeat: Infinity, ease: "linear" }
                    }
                  >
                    <div
                      className="orbit-chip flex h-11 w-11 flex-col items-center justify-center gap-0.5 rounded-full border border-[var(--divider)] bg-white/95 text-[var(--brand-blue)] shadow-[0_8px_22px_rgba(36,32,33,0.1)] backdrop-blur sm:h-[4.35rem] sm:w-[4.35rem] sm:rounded-[1.25rem] md:h-[4.6rem] md:w-[4.6rem]"
                      title={service.label}
                    >
                      <span className="text-[var(--brand-blue)]">{service.icon}</span>
                      <span className="hidden text-[0.58rem] font-semibold tracking-wide text-[var(--text)] sm:block">
                        {service.short}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="absolute inset-[30%] flex items-center justify-center overflow-hidden rounded-full border border-[color-mix(in_srgb,var(--brand-cyan)_45%,transparent)] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,#18A8E4_28%,#ffffff),#ffffff_72%)] shadow-[0_0_50px_color-mix(in_srgb,#1E7EC3_22%,transparent)] sm:inset-[34%]"
              animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
              transition={
                reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <div className="max-w-[92%] px-1.5 text-center sm:max-w-none sm:px-4">
                <p className="font-[family-name:var(--font-sora)] text-[0.62rem] font-semibold leading-tight text-[var(--brand-charcoal)] sm:text-sm sm:leading-snug md:text-base">
                  Product Studio
                </p>
                <p className="mt-0.5 text-[0.5rem] leading-tight text-[var(--muted)] sm:mt-1 sm:text-[0.7rem] sm:leading-normal md:text-xs">
                  <span className="sm:hidden">Strategy · Build</span>
                  <span className="hidden sm:inline">Strategy · Design · Engineering</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container mt-7 border-t border-[var(--divider)] pt-4 sm:mt-10 sm:pt-5">
        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[0.7rem] text-[var(--muted)] sm:gap-x-4 sm:text-xs md:text-sm">
          {proofStrip.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--brand-cyan)]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
