import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    name: "OpsFlow",
    tag: "Operations SaaS",
    body: "Workflow orchestration for growing teams — roles, approvals, automation and live operational dashboards.",
  },
  {
    name: "CommerceOS",
    tag: "Commerce Platform",
    body: "A modular commerce engine for catalog, checkout, inventory sync and growth experiments.",
  },
  {
    name: "InsightDesk",
    tag: "AI Product",
    body: "AI-assisted knowledge search and content automation built for support and product teams.",
  },
];

export function Products() {
  return (
    <section id="products" className="section" aria-labelledby="products-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Our SaaS products</p>
          <h2 id="products-heading" className="display max-w-3xl text-3xl md:text-5xl">
            We do not just build software for others. We build our own.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-[var(--muted)] md:text-lg">
            Our SaaS products are built around real operating problems — combining product
            strategy, UX, engineering, automation and scalable infrastructure.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.06}>
              <article className="surface-card relative h-full overflow-hidden p-6">
                <div
                  className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#18A8E4,transparent)]"
                  aria-hidden
                />
                <p className="eyebrow">{product.tag}</p>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-semibold">
                  {product.name}
                </h3>
                <p className="mt-3 text-[var(--muted)]">{product.body}</p>
                <a
                  href="#project-builder"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-cyan)]"
                >
                  Explore product
                  <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
