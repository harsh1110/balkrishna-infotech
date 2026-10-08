"use client";

import { Reveal } from "@/components/ui/Reveal";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

const capabilities = [
  {
    title: "Web Development",
    body: "Fast, scalable websites, portals and web applications built for performance and maintainability.",
    span: "md:col-span-2",
  },
  {
    title: "Mobile Apps",
    body: "Native and cross-platform mobile experiences designed around real user workflows.",
    span: "",
  },
  {
    title: "SaaS Development",
    body: "Multi-tenant platforms, subscriptions, roles, analytics and scalable product architecture.",
    span: "",
  },
  {
    title: "eCommerce",
    body: "Custom storefronts and commerce systems focused on conversion, operations and growth.",
    span: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    body: "Research, user flows, wireframes, high-fidelity design systems and prototypes that reduce friction.",
    span: "",
  },
  {
    title: "AI & Automation",
    body: "AI-assisted workflows, agents, intelligent search, content automation and business process orchestration.",
    span: "",
  },
  {
    title: "Cloud & DevOps",
    body: "Reliable deployment pipelines, observability, containerization, scaling and cloud infrastructure.",
    span: "",
  },
  {
    title: "Digital Marketing",
    body: "SEO, performance marketing, content systems and conversion-focused digital growth.",
    span: "",
  },
];

export function Capabilities() {
  return (
    <section id="services" className="section pt-0" aria-labelledby="capabilities-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 id="capabilities-heading" className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl">
            Everything you need to build, launch and scale.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04} className={item.span}>
              <InteractiveCard className="p-5 sm:p-6">
                <div
                  className="mb-4 h-9 w-9 rounded-lg bg-[linear-gradient(135deg,#1E7EC3,#18A8E4)] opacity-90"
                  aria-hidden
                />
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {item.body}
                </p>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
