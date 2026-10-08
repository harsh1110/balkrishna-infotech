import { Reveal } from "@/components/ui/Reveal";

const stories = [
  {
    quote:
      "They thought like a product team — not a vendor. The platform shipped clean, and the architecture still holds as we scale.",
    name: "Priya Mehta",
    role: "Founder, commerce brand",
  },
  {
    quote:
      "Design and engineering stayed aligned the whole way. We launched faster than our previous agency cycles and with clearer outcomes.",
    name: "Daniel Ortiz",
    role: "Head of Product, B2B SaaS",
  },
  {
    quote:
      "The AI automation work cut support load without sacrificing quality. Communication was crisp and commercially aware.",
    name: "Ananya Shah",
    role: "COO, operations software",
  },
];

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="stories-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Client stories</p>
          <h2 id="stories-heading" className="display max-w-3xl text-3xl md:text-5xl">
            Trusted by ambitious teams.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {stories.map((story, i) => (
            <Reveal key={story.name} delay={i * 0.05}>
              <figure className="surface-card flex h-full flex-col justify-between p-6 md:p-7">
                <blockquote className="text-[var(--muted)]">&ldquo;{story.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-[var(--divider)] pt-4">
                  <p className="font-semibold text-[var(--text)]">{story.name}</p>
                  <p className="text-sm text-[var(--muted)]">{story.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
