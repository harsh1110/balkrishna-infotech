"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: 120, suffix: "+", label: "Products & platforms shipped" },
  { value: 8, suffix: "+", label: "Years building digital systems" },
  { value: 40, suffix: "+", label: "Teams partnered with" },
  { value: 24, suffix: "/7", label: "Launch & scale support mindset" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function WhoWeAre() {
  return (
    <section id="about" className="section" aria-labelledby="who-heading">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-4">Who we are</p>
            <h2
              id="who-heading"
              className="display text-[1.75rem] sm:text-3xl md:text-5xl lg:text-[3.5rem]"
            >
              More than developers. We are product builders.
            </h2>
            <p className="mt-6 max-w-2xl text-base text-[var(--muted)] md:text-lg">
              We combine strategy, design and engineering to turn complex ideas into dependable
              digital products. From first concept to launch and long-term scale, we work as a
              technology partner focused on business outcomes.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-sm text-[var(--muted)] lg:text-right">
              Proof in motion — metrics that reflect how we ship.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <dl className="flex min-w-max gap-0 border-y border-[var(--divider)] md:min-w-0 md:grid md:grid-cols-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="min-w-[200px] border-r border-[var(--divider)] px-5 py-6 last:border-r-0 md:min-w-0 md:px-6"
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <dt className="font-[family-name:var(--font-sora)] text-3xl font-semibold gradient-text md:text-4xl">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-[var(--muted)]">{metric.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
