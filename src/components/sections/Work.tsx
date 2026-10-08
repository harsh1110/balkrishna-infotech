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
          <p className="eyebrow mb-4">Selected work</p>
          <h2 id="work-heading" className="display max-w-3xl text-3xl md:text-5xl">
            Digital products that make an impact.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--muted)] md:text-lg">
            Flagship engagements that show challenge, solution, stack and measurable outcome —
            proof before contact.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4">
          {cases.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="surface-card grid gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
                <div>
                  <p className="eyebrow">Case study 0{i + 1}</p>
                  <h3 className="mt-3 font-[family-name:var(--font-sora)] text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-[var(--muted)] md:text-base">
                    <span className="text-[var(--text)]">Challenge: </span>
                    {item.challenge}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)] md:text-base">
                    <span className="text-[var(--text)]">Solution: </span>
                    {item.solution}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-4 border-t border-[var(--divider)] pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Stack</p>
                    <p className="mt-2 text-sm text-[var(--text)]">{item.stack}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Outcome</p>
                    <p className="mt-2 font-[family-name:var(--font-sora)] text-lg font-semibold gradient-text">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
