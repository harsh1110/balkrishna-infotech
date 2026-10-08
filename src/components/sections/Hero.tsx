"use client";

import { motion, useReducedMotion } from "framer-motion";

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

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,color-mix(in_srgb,#1E7EC3_35%,transparent),transparent_60%),radial-gradient(ellipse_50%_40%_at_85%_30%,color-mix(in_srgb,#18A8E4_18%,transparent),transparent_55%),linear-gradient(180deg,#0B0D10_0%,#0F1419_45%,#0B0D10_100%)]" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div
        className="hero-glow absolute top-[18%] right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#18A8E4_28%,transparent),transparent_70%)] blur-2xl"
        aria-hidden
      />

      <div className="container relative grid min-h-[calc(100svh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Digital Product & Technology Studio</p>
          <h1
            id="hero-heading"
            className="display text-[2.15rem] sm:text-[2.75rem] md:text-6xl lg:text-[4.5rem]"
          >
            <span className="block text-[var(--text)]">Balkrishna Infotech</span>
            <span className="mt-2 block gradient-text">We Build What&apos;s Next.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-[var(--muted)] md:text-lg">
            We design, engineer and scale digital products — from high-performance websites and
            mobile applications to SaaS platforms, eCommerce ecosystems and AI-powered solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#project-builder" className="btn btn-primary">
              Start Your Project
            </a>
            <a href="#work" className="btn btn-secondary">
              View Our Work
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]" aria-hidden={!reduce}>
          <div className="relative aspect-square">
            <div className="absolute inset-[12%] rounded-full border border-[color-mix(in_srgb,var(--divider)_80%,transparent)]" />
            <div className="absolute inset-[24%] rounded-full border border-dashed border-[color-mix(in_srgb,var(--brand-blue)_45%,transparent)]" />
            <motion.div
              className="hero-orbit absolute inset-0"
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
                  <span
                    key={label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--divider)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] px-3 py-1.5 text-[0.65rem] font-medium tracking-wide text-[var(--text)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:text-xs"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {label}
                  </span>
                );
              })}
            </motion.div>
            <div className="absolute inset-[34%] flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--brand-cyan)_40%,transparent)] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,#18A8E4_35%,#151B20),#151B20_70%)] shadow-[0_0_60px_color-mix(in_srgb,#1E7EC3_35%,transparent)]">
              <div className="text-center px-4">
                <p className="font-[family-name:var(--font-sora)] text-sm font-semibold md:text-base">
                  Product Studio
                </p>
                <p className="mt-1 text-[0.7rem] text-[var(--muted)] md:text-xs">
                  Strategy · Design · Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 border-t border-[var(--divider)] pt-5">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--muted)] md:text-sm">
          {services.map((item) => (
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
