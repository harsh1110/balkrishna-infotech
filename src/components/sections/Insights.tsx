"use client";

import { Reveal } from "@/components/ui/Reveal";

const posts = [
  {
    title: "How product studios ship SaaS that survives year two",
    topic: "SaaS development",
    read: "6 min read",
  },
  {
    title: "eCommerce engineering choices that protect conversion under load",
    topic: "eCommerce",
    read: "5 min read",
  },
  {
    title: "Practical AI automation for ops teams without brittle agents",
    topic: "AI automation",
    read: "7 min read",
  },
  {
    title: "Cloud release habits that keep Core Web Vitals green",
    topic: "Cloud & DevOps",
    read: "5 min read",
  },
];

export function Insights() {
  return (
    <section id="insights" className="section pt-0" aria-labelledby="insights-heading">
      <div className="container">
        <Reveal>
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4">Insights</p>
              <h2
                id="insights-heading"
                className="display max-w-3xl text-[1.75rem] sm:text-3xl md:text-5xl"
              >
                Thinking from the build room.
              </h2>
            </div>
            <p className="text-sm text-[var(--muted)]">Scroll sideways to browse notes.</p>
          </div>
        </Reveal>
      </div>

      <div className="insights-rail pl-[max(1.25rem,calc((100%-var(--max-content))/2+0.75rem))] pr-5">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="group relative w-[min(84vw,340px)] shrink-0 snap-start overflow-hidden rounded-[1.25rem] border border-[var(--divider)] bg-[linear-gradient(160deg,#ffffff_0%,#eef5fa_100%)] p-6 transition hover:-translate-y-1 hover:border-[var(--brand-cyan)] sm:w-[360px]"
            >
              <div
                className="mb-8 h-28 rounded-xl bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,#18A8E4_35%,transparent),transparent_60%),linear-gradient(135deg,#1E7EC3,#18A8E4)] opacity-90 transition group-hover:scale-[1.02]"
                aria-hidden
              />
              <p className="eyebrow">
                {String(i + 1).padStart(2, "0")} · {post.topic}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-sora)] text-lg font-semibold md:text-xl">
                {post.title}
              </h3>
              <p className="mt-4 text-sm text-[var(--muted)]">{post.read}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
