"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Discover", body: "Goals, constraints, audiences and success metrics." },
  { n: "02", title: "Strategize", body: "Product direction, scope and technical approach." },
  { n: "03", title: "Design", body: "Flows, systems and interfaces that reduce friction." },
  { n: "04", title: "Develop", body: "Engineering for reliability, speed and maintainability." },
  { n: "05", title: "Launch", body: "Hardening, SEO, analytics and go-live readiness." },
  { n: "06", title: "Scale", body: "Iteration, infrastructure and growth systems." },
];

export function Process() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section className="section" aria-labelledby="process-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Process</p>
          <h2
            id="process-heading"
            className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
          >
            From idea to a scalable product.
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-12">
          <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-[var(--divider)]">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,#1E7EC3,#18A8E4)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <ol className="relative grid gap-0 border-l border-[var(--divider)] pl-5 sm:pl-0 sm:border-l-0">
            <div className="hidden sm:absolute sm:inset-x-0 sm:top-5 sm:block sm:h-px sm:bg-[var(--divider)]" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6 sm:gap-3">
              {steps.map((step, i) => {
                const selected = i === active;
                return (
                  <li key={step.n} className="relative">
                    <button
                      type="button"
                      className="group w-full text-left"
                      onClick={() => setActive(i)}
                      aria-current={selected ? "step" : undefined}
                    >
                      <span
                        className={`relative z-[1] mb-3 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                          selected
                            ? "border-transparent bg-[linear-gradient(135deg,#1E7EC3,#18A8E4)] text-white shadow-[0_8px_20px_rgba(30,126,195,0.3)]"
                            : "border-[var(--divider)] bg-white text-[var(--muted)] group-hover:border-[var(--brand-blue)]"
                        }`}
                      >
                        {step.n}
                      </span>
                      <span
                        className={`block font-[family-name:var(--font-sora)] text-base font-semibold sm:text-sm lg:text-base ${
                          selected ? "text-[var(--text)]" : "text-[var(--muted)]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </div>
          </ol>

          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-[var(--divider)] bg-white/80 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[active].n}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <p className="eyebrow">Step {steps[active].n}</p>
                <h3 className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-semibold md:text-3xl">
                  {steps[active].title}
                </h3>
                <p className="mt-3 max-w-2xl text-[var(--muted)] md:text-lg">{steps[active].body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
