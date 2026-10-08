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
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Why Balkrishna</p>
          <h2 id="why-heading" className="display max-w-3xl text-3xl md:text-5xl">
            Why Balkrishna Infotech.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)] md:text-lg">Built differently.</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05}>
              <article className="surface-card h-full p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-3 text-[var(--muted)]">{point.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
