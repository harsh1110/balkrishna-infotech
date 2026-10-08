import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "120+", label: "Products & platforms shipped" },
  { value: "8+", label: "Years building digital systems" },
  { value: "40+", label: "Teams partnered with" },
  { value: "24/7", label: "Launch & scale support mindset" },
];

export function WhoWeAre() {
  return (
    <section id="about" className="section" aria-labelledby="who-heading">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="eyebrow mb-4">Who we are</p>
          <h2 id="who-heading" className="display text-3xl md:text-5xl lg:text-[3.5rem]">
            More than developers. We are product builders.
          </h2>
          <p className="mt-6 max-w-2xl text-base text-[var(--muted)] md:text-lg">
            We combine strategy, design and engineering to turn complex ideas into dependable
            digital products. From first concept to launch and long-term scale, we work as a
            technology partner focused on business outcomes.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="surface-card p-5">
                <dt className="font-[family-name:var(--font-sora)] text-3xl font-semibold gradient-text md:text-4xl">
                  {metric.value}
                </dt>
                <dd className="mt-2 text-sm text-[var(--muted)]">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
