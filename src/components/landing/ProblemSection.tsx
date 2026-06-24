"use client";

import { motion } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const problems = [
  {
    title: "The phone goes quiet",
    description:
      "You do solid work. But some weeks the calls just stop — and you can't tell why.",
    metric: "0–2 calls/week",
    status: "critical" as const,
  },
  {
    title: "Competitors rank above you",
    description:
      "Search your service in your town. They're on the map. You're on page two — or nowhere.",
    metric: "Page 2+",
    status: "warning" as const,
  },
  {
    title: "Marketing feels like guesswork",
    description:
      "You've heard the pitches. Paid for the reports. Still don't know what's actually working.",
    metric: "No clarity",
    status: "neutral" as const,
  },
];

const statusColors = {
  critical: "text-red-600 bg-red-50 border-red-200",
  warning: "text-amber-600 bg-amber-50 border-amber-200",
  neutral: "text-dusk-gray bg-surface-subtle border-slate-200",
};

export function ProblemSection() {
  return (
    <Section
      id="problem"
      label="Sound familiar?"
      className="border-t border-slate-100 bg-surface-subtle"
    >
      <Reveal>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-deep-horizon md:text-4xl">
          You&apos;re great at the work.{" "}
          <span className="text-dusk-gray">Online, you&apos;re hard to find.</span>
        </h2>
        <p className="mt-4 max-w-xl text-dusk-gray">
          Most agencies sell noise. The real issue is missing infrastructure —
          the systems that get you found, trusted, and called.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <span
                className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusColors[problem.status]}`}
              >
                {problem.metric}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-deep-horizon">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dusk-gray">
                {problem.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
