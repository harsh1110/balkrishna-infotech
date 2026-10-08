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
];

export function Insights() {
  return (
    <section id="insights" className="section pt-0" aria-labelledby="insights-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Insights</p>
          <h2 id="insights-heading" className="display max-w-3xl text-3xl md:text-5xl">
            Thinking from the build room.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Practical notes on product engineering, commerce systems and AI automation — written to
            answer real buyer questions.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <article className="surface-card h-full p-6">
                <p className="eyebrow">{post.topic}</p>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-lg font-semibold md:text-xl">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-[var(--muted)]">{post.read}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
