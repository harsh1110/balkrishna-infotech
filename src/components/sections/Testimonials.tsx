"use client";

import { Carousel } from "@/components/ui/Carousel";
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
          <h2
            id="stories-heading"
            className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
          >
            Trusted by ambitious teams.
          </h2>
        </Reveal>

        <div className="mt-8 md:mt-10">
          <Carousel
            items={stories}
            ariaLabel="Client testimonials"
            autoPlayMs={7000}
            renderItem={(story) => (
              <figure className="mx-auto flex min-h-[240px] max-w-3xl flex-col justify-center px-5 py-8 pb-14 text-center sm:px-10 sm:py-10 md:min-h-[300px] md:py-14 md:pb-14">
                <blockquote className="font-[family-name:var(--font-sora)] text-xl leading-relaxed text-[var(--text)] sm:text-2xl md:text-3xl">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold text-[var(--text)]">{story.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{story.role}</p>
                </figcaption>
              </figure>
            )}
          />
        </div>
      </div>
    </section>
  );
}
