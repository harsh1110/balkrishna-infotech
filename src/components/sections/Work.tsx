"use client";

import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";

const cases = [
  {
    title: "Marketplace relaunch for a growth-stage retail brand",
    challenge: "Fragmented catalog and checkout friction were suppressing conversion.",
    solution: "Rebuilt storefront architecture, UX flows and performance layer.",
    stack: "Next.js · Node · PostgreSQL · AWS",
    outcome: "+38% conversion · 2.1s LCP on key landing pages",
  },
  {
    title: "Multi-tenant SaaS for field operations",
    challenge: "Legacy tools could not support roles, analytics or scale.",
    solution: "Designed and shipped a subscription platform with modular workflows.",
    stack: "React · Node · Redis · Docker · CI/CD",
    outcome: "3× concurrent users with stable response times",
  },
  {
    title: "AI support desk for a B2B product company",
    challenge: "Support volume grew faster than headcount.",
    solution: "Built retrieval-assisted agents and content automation for ops teams.",
    stack: "Next.js · OpenAI · Gemini · MongoDB",
    outcome: "41% faster first-response on common tickets",
  },
];

export function Work() {
  return (
    <section id="work" className="section pt-0" aria-labelledby="work-heading">
      <div className="container">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Selected work</p>
              <h2
                id="work-heading"
                className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
              >
                Digital products that make an impact.
              </h2>
            </div>
            <p className="max-w-md text-[var(--muted)] md:text-right">
              Swipe or use arrows to explore flagship outcomes.
            </p>
          </div>
        </Reveal>

        <Carousel
          items={cases}
          ariaLabel="Selected work case studies"
          autoPlayMs={6500}
          renderItem={(item, i) => (
            <article className="grid gap-5 p-5 pb-14 sm:min-h-[280px] sm:gap-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:min-h-[360px] md:p-10 md:pb-10">
              <div>
                <p className="eyebrow">Case study 0{i + 1}</p>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-xl font-semibold sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm text-[var(--muted)] md:text-base">
                  <span className="text-[var(--text)]">Challenge: </span>
                  {item.challenge}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)] md:text-base">
                  <span className="text-[var(--text)]">Solution: </span>
                  {item.solution}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6 border-t border-[var(--divider)] pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Stack</p>
                  <p className="mt-2 text-sm text-[var(--text)] md:text-base">{item.stack}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Outcome</p>
                  <p className="mt-2 font-[family-name:var(--font-sora)] text-xl font-semibold gradient-text md:text-2xl">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}
