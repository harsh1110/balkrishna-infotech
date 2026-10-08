"use client";

import { Reveal } from "@/components/ui/Reveal";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

const steps = [
  { n: "01", title: "Discover", body: "Goals, constraints, audiences and success metrics." },
  { n: "02", title: "Strategize", body: "Product direction, scope and technical approach." },
  { n: "03", title: "Design", body: "Flows, systems and interfaces that reduce friction." },
  { n: "04", title: "Develop", body: "Engineering for reliability, speed and maintainability." },
  { n: "05", title: "Launch", body: "Hardening, SEO, analytics and go-live readiness." },
  { n: "06", title: "Scale", body: "Iteration, infrastructure and growth systems." },
];

export function Process() {
  return (
    <section className="section" aria-labelledby="process-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Process</p>
          <h2 id="process-heading" className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl">
            From idea to a scalable product.
          </h2>
        </Reveal>

        <ol className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.04}>
              <InteractiveCard as="li" className="p-5 sm:p-6">
                <span className="font-[family-name:var(--font-sora)] text-sm font-semibold gradient-text">
                  {step.n}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-lg font-semibold sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] md:text-base">{step.body}</p>
              </InteractiveCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
