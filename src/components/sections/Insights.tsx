"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const posts = [
  {
    title: "How product studios ship SaaS that survives year two",
    topic: "SaaS development",
    read: "6 min read",
    blurb: "Architecture habits that keep product velocity from collapsing after launch.",
  },
  {
    title: "eCommerce engineering choices that protect conversion under load",
    topic: "eCommerce",
    read: "5 min read",
    blurb: "Checkout, catalog, and caching decisions that hold when traffic spikes.",
  },
  {
    title: "Practical AI automation for ops teams without brittle agents",
    topic: "AI automation",
    read: "7 min read",
    blurb: "Workflow automation patterns that stay maintainable in production.",
  },
  {
    title: "Cloud release habits that keep Core Web Vitals green",
    topic: "Cloud & DevOps",
    read: "5 min read",
    blurb: "Release and observability practices that protect real-user performance.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function offsetOf(index: number, active: number, count: number) {
  let diff = index - active;
  const half = Math.floor(count / 2);
  if (diff > half) diff -= count;
  if (diff < -half) diff += count;
  return diff;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function Insights() {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const count = posts.length;

  const go = useCallback(
    (next: number) => {
      setActive((prev) => {
        const target = (next + count) % count;
        setDirection(target > prev || (prev === count - 1 && target === 0) ? 1 : -1);
        return target;
      });
    },
    [count],
  );

  useEffect(() => {
    if (reduce || count < 2) return;
    const id = window.setInterval(() => go(active + 1), 4800);
    return () => window.clearInterval(id);
  }, [active, count, go, reduce]);

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -50 || info.velocity.x < -400) go(active + 1);
    else if (info.offset.x > 50 || info.velocity.x > 400) go(active - 1);
  }

  const post = posts[active];

  return (
    <section id="insights" className="section pt-0" aria-labelledby="insights-heading">
      <div className="container">
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Insights</p>
              <h2
                id="insights-heading"
                className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
              >
                Thinking from the build room.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[var(--muted)] md:text-right">
              {isDesktop
                ? "Drag, tap a side card, or let the stage advance."
                : "Use the controls below to browse notes."}
            </p>
          </div>
        </Reveal>

        <div
          className="insights-stage relative mx-auto max-w-5xl overflow-x-clip"
          aria-roledescription="carousel"
          aria-label="Insights carousel"
        >
          {/* Mobile: single-card fade/slide — no 3D, no side overflow */}
          {!isDesktop ? (
            <div className="relative overflow-hidden rounded-[1.25rem] border border-[var(--divider)] bg-white/95 shadow-[0_14px_36px_rgba(36,32,33,0.08)]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.article
                  key={post.title}
                  custom={direction}
                  className="p-5 sm:p-6"
                  variants={{
                    enter: (d: number) =>
                      reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: d > 0 ? 28 : -28 },
                    center: { opacity: 1, x: 0 },
                    exit: (d: number) =>
                      reduce ? { opacity: 0, x: 0 } : { opacity: 0, x: d > 0 ? -28 : 28 },
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.32, ease }}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="eyebrow">
                      {String(active + 1).padStart(2, "0")} · {post.topic}
                    </p>
                    <span className="text-xs text-[var(--muted)]">{post.read}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold leading-snug text-[var(--text)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{post.blurb}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className="h-1.5 w-16 overflow-hidden rounded-full bg-[var(--divider)]"
                      aria-hidden
                    >
                      {!reduce ? (
                        <motion.span
                          key={`m-progress-${active}`}
                          className="block h-full origin-left rounded-full bg-[linear-gradient(90deg,#1E7EC3,#18A8E4)]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 4.6, ease: "linear" }}
                        />
                      ) : null}
                    </span>
                    <span className="text-sm font-medium text-[var(--brand-blue)]">
                      Read note →
                    </span>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          ) : (
            <>
              <div className="pointer-events-none absolute inset-x-[8%] top-[18%] -z-10 h-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#18A8E4_22%,transparent),transparent_70%)] blur-2xl" />
              <div className="relative h-[380px] overflow-hidden md:h-[400px]">
                {posts.map((item, i) => {
                  const offset = offsetOf(i, active, count);
                  const isActive = offset === 0;
                  const abs = Math.abs(offset);
                  if (abs > 2) return null;

                  const shift = offset * (abs === 1 ? 1 : 1.55);
                  const scale = isActive ? 1 : abs === 1 ? 0.84 : 0.72;
                  const rotateY = reduce ? 0 : offset * -22;
                  const z = isActive ? 30 : 20 - abs * 8;
                  const opacity = isActive ? 1 : abs === 1 ? 0.7 : 0.38;

                  return (
                    <motion.article
                      key={item.title}
                      className={`insights-card absolute left-1/2 top-4 h-[calc(100%-2.5rem)] w-[min(62%,34rem)] cursor-pointer rounded-[1.35rem] border border-[var(--divider)] bg-white/95 p-8 shadow-[0_18px_50px_rgba(36,32,33,0.1)] backdrop-blur ${
                        isActive ? "pointer-events-auto" : ""
                      }`}
                      style={{
                        zIndex: z,
                        transformPerspective: 1400,
                        transformStyle: "preserve-3d",
                      }}
                      animate={{
                        x: reduce ? "-50%" : `calc(-50% + ${shift * 9.5}rem)`,
                        scale,
                        rotateY,
                        opacity,
                        y: isActive ? 0 : 12 + abs * 6,
                      }}
                      transition={reduce ? { duration: 0 } : { duration: 0.55, ease }}
                      drag={isActive && !reduce ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.18}
                      onDragEnd={isActive ? onDragEnd : undefined}
                      onClick={() => {
                        if (!isActive) go(i);
                      }}
                      aria-hidden={!isActive}
                      tabIndex={isActive ? 0 : -1}
                    >
                      <div className="flex h-full flex-col">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <p className="eyebrow">
                            {String(i + 1).padStart(2, "0")} · {item.topic}
                          </p>
                          <span className="text-xs text-[var(--muted)]">{item.read}</span>
                        </div>
                        <h3 className="font-[family-name:var(--font-sora)] text-[1.75rem] font-semibold leading-snug text-[var(--text)]">
                          {item.title}
                        </h3>
                        <AnimatePresence mode="wait">
                          {isActive ? (
                            <motion.p
                              key={`blurb-${i}`}
                              className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]"
                              initial={reduce ? false : { opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={reduce ? undefined : { opacity: 0, y: -8 }}
                              transition={{ duration: 0.35, ease }}
                            >
                              {item.blurb}
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                        <div className="mt-auto flex items-center justify-between pt-5">
                          <span
                            className="h-1.5 w-16 overflow-hidden rounded-full bg-[var(--divider)]"
                            aria-hidden
                          >
                            {isActive && !reduce ? (
                              <motion.span
                                className="block h-full origin-left rounded-full bg-[linear-gradient(90deg,#1E7EC3,#18A8E4)]"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 4.6, ease: "linear" }}
                                key={`progress-${active}`}
                              />
                            ) : (
                              <span className="block h-full w-0" />
                            )}
                          </span>
                          <span className="text-sm font-medium text-[var(--brand-blue)]">
                            Read note →
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </>
          )}

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              className="insights-nav"
              aria-label="Previous insight"
              onClick={() => go(active - 1)}
            >
              ‹
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Insight slides">
              {posts.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show insight ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-[linear-gradient(90deg,#1E7EC3,#18A8E4)]"
                      : "w-2 bg-[var(--divider)] hover:bg-[var(--brand-blue)]/40"
                  }`}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              className="insights-nav"
              aria-label="Next insight"
              onClick={() => go(active + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
