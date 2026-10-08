const items = [
  "Web Development",
  "Mobile Apps",
  "SaaS Platforms",
  "eCommerce",
  "AI & Automation",
  "UI/UX Design",
  "Cloud & DevOps",
  "Digital Growth",
  "Product Engineering",
  "Conversion Systems",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <section
      className="border-y border-[var(--divider)] bg-white py-4 overflow-hidden"
      aria-label="Capabilities overview"
    >
      <div className="marquee-track" aria-hidden>
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-[var(--muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)]" />
            {item}
          </span>
        ))}
      </div>
      <p className="sr-only">{items.join(", ")}</p>
    </section>
  );
}
