"use client";

import { Reveal } from "@/components/ui/Reveal";

const rows = [
  ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "React Native"],
  ["Node.js", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
  ["AWS", "Docker", "CI/CD", "OpenAI", "Gemini", "Observability"],
];

export function Technology() {
  return (
    <section className="section pt-0" aria-labelledby="tech-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Technology universe</p>
          <h2
            id="tech-heading"
            className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
          >
            Built with technologies made to scale.
          </h2>
        </Reveal>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10">
        {rows.map((row, rowIndex) => {
          const loop = [...row, ...row, ...row];
          return (
            <div key={rowIndex} className="overflow-hidden">
              <div
                className={`tech-marquee flex w-max gap-3 ${rowIndex % 2 === 1 ? "tech-marquee-reverse" : ""}`}
                aria-hidden
              >
                {loop.map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="inline-flex items-center rounded-full border border-[var(--divider)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--text)] shadow-[0_6px_18px_rgba(36,32,33,0.04)]"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
        <p className="sr-only">
          Frontend React Next.js. Backend Node.js APIs. Data PostgreSQL MongoDB Redis. Cloud AWS
          Docker CI/CD. AI OpenAI Gemini.
        </p>
      </div>
    </section>
  );
}
