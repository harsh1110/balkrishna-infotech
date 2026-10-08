"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "Web Development",
    body: "Fast, scalable websites, portals and web applications built for performance and maintainability.",
  },
  {
    title: "Mobile Apps",
    body: "Native and cross-platform mobile experiences designed around real user workflows.",
  },
  {
    title: "SaaS Development",
    body: "Multi-tenant platforms, subscriptions, roles, analytics and scalable product architecture.",
  },
  {
    title: "eCommerce",
    body: "Custom storefronts and commerce systems focused on conversion, operations and growth.",
  },
  {
    title: "UI/UX Design",
    body: "Research, user flows, wireframes, high-fidelity design systems and prototypes that reduce friction.",
  },
  {
    title: "AI & Automation",
    body: "AI-assisted workflows, agents, intelligent search, content automation and business process orchestration.",
  },
  {
    title: "Cloud & DevOps",
    body: "Reliable deployment pipelines, observability, containerization, scaling and cloud infrastructure.",
  },
  {
    title: "Digital Marketing",
    body: "SEO, performance marketing, content systems and conversion-focused digital growth.",
  },
];

export function Capabilities() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = capabilities[active];

  return (
    <section id="services" className="section pt-0" aria-labelledby="capabilities-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Capabilities</p>
          <h2
            id="capabilities-heading"
            className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
          >
            Everything you need to build, launch and scale.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div
            className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Services"
          >
            {capabilities.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-left text-sm font-medium transition lg:rounded-xl lg:px-4 lg:py-3 ${
                    selected
                      ? "border-transparent bg-[linear-gradient(135deg,#1E7EC3,#18A8E4)] text-white shadow-[0_10px_24px_rgba(30,126,195,0.25)]"
                      : "border-[var(--divider)] bg-white/70 text-[var(--muted)] hover:border-[var(--brand-blue)] hover:text-[var(--text)]"
                  }`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActive(i);
                  }}
                >
                  <span className="lg:hidden">{item.title}</span>
                  <span className="hidden lg:inline">
                    <span className="mr-3 font-[family-name:var(--font-sora)] text-xs opacity-80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-[var(--divider)] bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,#18A8E4_18%,transparent),transparent_45%),linear-gradient(180deg,#ffffff,#f3f8fc)] p-6 sm:min-h-[260px] sm:p-8 md:p-10"
            role="tabpanel"
            aria-live="polite"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#1E7EC3,#18A8E4)]" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
              >
                <p className="eyebrow">Service focus</p>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-semibold sm:text-3xl md:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-xl text-base text-[var(--muted)] sm:text-lg">{current.body}</p>
                <a href="#project-builder" className="btn btn-primary mt-7">
                  Talk about {current.title}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
