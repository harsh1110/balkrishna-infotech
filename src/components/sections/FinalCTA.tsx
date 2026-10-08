import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section" aria-labelledby="final-cta-heading">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.25rem] border border-[var(--divider)] px-6 py-14 text-center md:px-12 md:py-20">
            <div
              className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,#18A8E4_24%,transparent),transparent_55%),linear-gradient(180deg,#ffffff,#eef5fa)]"
              aria-hidden
            />
            <p className="eyebrow mb-4">Ready when you are</p>
            <h2 id="final-cta-heading" className="display text-3xl md:text-5xl lg:text-[3.5rem]">
              Let&apos;s Build Something Remarkable.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[var(--muted)] md:text-lg">
              Tell us what you are working on. We will help turn it into a product people want to
              use.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#project-builder" className="btn btn-primary">
                Start a Project
              </a>
              <a href="#work" className="btn btn-secondary">
                Explore Work
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
