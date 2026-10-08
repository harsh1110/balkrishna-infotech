"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    name: "OpsFlow",
    tag: "Operations SaaS",
    body: "Workflow orchestration for growing teams — roles, approvals, automation and live operational dashboards.",
    points: ["Role-based workflows", "Automation rules", "Live ops dashboards"],
  },
  {
    name: "CommerceOS",
    tag: "Commerce Platform",
    body: "A modular commerce engine for catalog, checkout, inventory sync and growth experiments.",
    points: ["Modular catalog", "Conversion-ready checkout", "Inventory sync"],
  },
  {
    name: "InsightDesk",
    tag: "AI Product",
    body: "AI-assisted knowledge search and content automation built for support and product teams.",
    points: ["Intelligent search", "Content automation", "Support copilots"],
  },
];

export function Products() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const product = products[active];

  return (
    <section id="products" className="section" aria-labelledby="products-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Our SaaS products</p>
          <h2
            id="products-heading"
            className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
          >
            We do not just build software for others. We build our own.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-[var(--muted)] md:text-lg">
            Our SaaS products are built around real operating problems — combining product
            strategy, UX, engineering, automation and scalable infrastructure.
          </p>
        </Reveal>

        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[var(--divider)] bg-white/75 lg:mt-12">
          <div className="flex border-b border-[var(--divider)] overflow-x-auto">
            {products.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className={`min-w-[9.5rem] flex-1 px-4 py-4 text-left transition sm:px-6 ${
                  i === active
                    ? "bg-[color-mix(in_srgb,#18A8E4_10%,white)] text-[var(--text)]"
                    : "text-[var(--muted)] hover:bg-white"
                }`}
                onClick={() => setActive(i)}
              >
                <span className="block text-xs uppercase tracking-[0.12em] text-[var(--brand-blue)]">
                  {item.tag}
                </span>
                <span className="mt-1 block font-[family-name:var(--font-sora)] text-lg font-semibold">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={product.name}
              className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="font-[family-name:var(--font-sora)] text-3xl font-semibold md:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-4 text-[var(--muted)] md:text-lg">{product.body}</p>
                <a href="#project-builder" className="btn btn-primary mt-7">
                  Explore {product.name}
                </a>
              </div>
              <ul className="space-y-3 self-center">
                {product.points.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 border-b border-[var(--divider)] pb-3 text-[var(--text)] last:border-b-0"
                  >
                    <span className="font-[family-name:var(--font-sora)] text-sm font-semibold gradient-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
