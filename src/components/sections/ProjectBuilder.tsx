"use client";

import { FormEvent, useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    key: "building",
    prompt: "What are you building?",
    type: "choices" as const,
    choices: [
      "Website",
      "Mobile App",
      "SaaS Platform",
      "eCommerce",
      "AI Product",
      "Custom Software",
    ],
  },
  {
    key: "stage",
    prompt: "Where are you now?",
    type: "choices" as const,
    choices: ["Idea", "Requirements ready", "Designs ready", "Existing product", "Redesign / scale"],
  },
  {
    key: "priority",
    prompt: "What matters most?",
    type: "multi" as const,
    choices: [
      "Speed",
      "UX",
      "Architecture",
      "Automation",
      "Marketing",
      "Integrations",
      "Cost control",
    ],
  },
  {
    key: "scope",
    prompt: "Project scope",
    type: "scope" as const,
  },
  {
    key: "contact",
    prompt: "How can we reach you?",
    type: "contact" as const,
  },
];

type Answers = {
  building: string;
  stage: string;
  priority: string[];
  budget: string;
  launch: string;
  brief: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  channel: string;
};

const initial: Answers = {
  building: "",
  stage: "",
  priority: [],
  budget: "",
  launch: "",
  brief: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  channel: "Email",
};

export function ProjectBuilder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const current = steps[step];
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  function togglePriority(choice: string) {
    setAnswers((prev) => {
      const exists = prev.priority.includes(choice);
      return {
        ...prev,
        priority: exists
          ? prev.priority.filter((item) => item !== choice)
          : [...prev.priority, choice],
      };
    });
  }

  function next() {
    setError("");
    if (current.type === "choices") {
      const value = answers[current.key as "building" | "stage"];
      if (!value) {
        setError("Please select an option to continue.");
        return;
      }
    }
    if (current.type === "multi" && answers.priority.length === 0) {
      setError("Select at least one priority.");
      return;
    }
    if (current.type === "scope" && (!answers.budget || !answers.brief.trim())) {
      setError("Add a budget band and a short brief.");
      return;
    }
    if (current.type === "contact") {
      if (!answers.name.trim() || !answers.email.trim()) {
        setError("Name and email are required.");
        return;
      }
      setSubmitted(true);
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <section id="project-builder" className="section pt-0" aria-labelledby="builder-heading">
      <div className="container max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-4">Project builder</p>
          <h2 id="builder-heading" className="display text-3xl md:text-5xl">
            Start a project that is ready for a useful conversation.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            A short progressive flow — lower friction, clearer context for our response.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <div className="surface-card p-6 md:p-8">
            {submitted ? (
              <div role="status">
                <p className="eyebrow">Thank you</p>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-semibold">
                  We received your brief.
                </h3>
                <p className="mt-3 text-[var(--muted)]">
                  Expect a response within 1–2 business days with next steps. Prefer a live
                  conversation? Reply to our note and we can share a calendar link.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between text-xs text-[var(--muted)]">
                    <span>
                      Step {step + 1} of {steps.length}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--divider)_70%,transparent)]"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                  >
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#1E7EC3,#18A8E4)] transition-[width] duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="font-[family-name:var(--font-sora)] text-xl font-semibold md:text-2xl">
                    {current.prompt}
                  </legend>

                  {current.type === "choices" ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {current.choices.map((choice) => {
                        const key = current.key as "building" | "stage";
                        const selected = answers[key] === choice;
                        return (
                          <button
                            key={choice}
                            type="button"
                            className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                              selected
                                ? "border-[var(--brand-cyan)] bg-[color-mix(in_srgb,var(--brand-blue)_18%,var(--surface))]"
                                : "border-[var(--divider)] bg-transparent hover:border-[var(--brand-blue)]"
                            }`}
                            onClick={() => setAnswers((prev) => ({ ...prev, [key]: choice }))}
                            aria-pressed={selected}
                          >
                            {choice}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  {current.type === "multi" ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {current.choices.map((choice) => {
                        const selected = answers.priority.includes(choice);
                        return (
                          <button
                            key={choice}
                            type="button"
                            className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                              selected
                                ? "border-[var(--brand-cyan)] bg-[color-mix(in_srgb,var(--brand-blue)_18%,var(--surface))]"
                                : "border-[var(--divider)] bg-transparent hover:border-[var(--brand-blue)]"
                            }`}
                            onClick={() => togglePriority(choice)}
                            aria-pressed={selected}
                          >
                            {choice}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  {current.type === "scope" ? (
                    <div className="mt-5 grid gap-4">
                      <label className="grid gap-2 text-sm">
                        <span>Budget band</span>
                        <select
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.budget}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, budget: e.target.value }))
                          }
                        >
                          <option value="">Select a range</option>
                          <option value="<25k">Under $25k</option>
                          <option value="25-75k">$25k – $75k</option>
                          <option value="75-150k">$75k – $150k</option>
                          <option value="150k+">$150k+</option>
                        </select>
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Target launch date</span>
                        <input
                          type="month"
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.launch}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, launch: e.target.value }))
                          }
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Short brief</span>
                        <textarea
                          rows={4}
                          className="rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 py-3 text-[var(--text)]"
                          placeholder="What are you trying to achieve?"
                          value={answers.brief}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, brief: e.target.value }))
                          }
                        />
                      </label>
                    </div>
                  ) : null}

                  {current.type === "contact" ? (
                    <div className="mt-5 grid gap-4">
                      <label className="grid gap-2 text-sm">
                        <span>Name</span>
                        <input
                          required
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.name}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, name: e.target.value }))
                          }
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Email</span>
                        <input
                          required
                          type="email"
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.email}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, email: e.target.value }))
                          }
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Phone (optional)</span>
                        <input
                          type="tel"
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.phone}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, phone: e.target.value }))
                          }
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Company</span>
                        <input
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.company}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, company: e.target.value }))
                          }
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Preferred contact channel</span>
                        <select
                          className="min-h-11 rounded-xl border border-[var(--divider)] bg-[var(--bg)] px-3 text-[var(--text)]"
                          value={answers.channel}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, channel: e.target.value }))
                          }
                        >
                          <option>Email</option>
                          <option>Phone</option>
                          <option>WhatsApp</option>
                        </select>
                      </label>
                      <p className="text-xs text-[var(--muted)]">
                        By submitting, you agree we may contact you about this inquiry. We do not
                        sell your information.
                      </p>
                    </div>
                  ) : null}
                </fieldset>

                {error ? (
                  <p className="mt-4 text-sm text-[#ff8f8f]" role="alert">
                    {error}
                  </p>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  {step > 0 ? (
                    <button type="button" className="btn btn-secondary" onClick={back}>
                      Back
                    </button>
                  ) : null}
                  <button type="submit" className="btn btn-primary">
                    {step === steps.length - 1 ? "Submit brief" : "Continue"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
