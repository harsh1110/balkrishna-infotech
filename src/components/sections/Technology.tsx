import { Reveal } from "@/components/ui/Reveal";

const groups = [
  { label: "Frontend", items: ["React", "Next.js"] },
  { label: "Backend", items: ["Node.js", "APIs"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { label: "Cloud", items: ["AWS", "Docker", "CI/CD"] },
  { label: "AI", items: ["OpenAI", "Gemini", "Model APIs"] },
];

export function Technology() {
  return (
    <section className="section pt-0" aria-labelledby="tech-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Technology universe</p>
          <h2 id="tech-heading" className="display max-w-3xl text-3xl md:text-5xl">
            Built with technologies made to scale.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.04}>
              <div className="surface-card h-full p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-cyan)]">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text)] md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
