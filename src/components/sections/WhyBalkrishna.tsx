"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    title: "Product Thinking",
    body: "We start from outcomes — not ticket queues — so every build decision supports the business.",
  },
  {
    title: "Design + Engineering",
    body: "Interface quality and system reliability ship together, not as disconnected handoffs.",
  },
  {
    title: "Built to Scale",
    body: "Architecture, performance and operations are first-class concerns from day one.",
  },
  {
    title: "Long-Term Partnership",
    body: "We stay through launch, iteration and growth — not just delivery day.",
  },
];

export function WhyBalkrishna() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:items-start">
        <Reveal>
          <p className="eyebrow mb-4">Why Balkrishna</p>
          <h2
            id="why-heading"
            className="display text-[1.75rem] sm:text-3xl md:text-5xl"
          >
            Why Balkrishna Infotech.
          </h2>
          <p className="mt-4 max-w-md text-[var(--muted)] md:text-lg">
            Built differently — expand each principle to see how we partner.
          </p>
        </Reveal>

        <div className="divide-y divide-[var(--divider)] border-y border-[var(--divider)]">
          {points.map((point, i) => {
            const selected = open === i;
            return (
              <div key={point.title}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={selected}
                  onClick={() => setOpen(i)}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-[family-name:var(--font-sora)] text-sm font-semibold gradient-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-sora)] text-lg font-semibold sm:text-xl">
                      {point.title}
                    </span>
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--divider)] text-lg transition ${
                      selected ? "bg-[linear-gradient(135deg,#1E7EC3,#18A8E4)] text-white" : "bg-white"
                    }`}
                    aria-hidden
                  >
                    {selected ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {selected ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-10 text-[var(--muted)] md:text-lg">{point.body}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
