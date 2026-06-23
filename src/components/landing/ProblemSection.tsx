"use client";

import { motion } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "Quiet phones",
    description:
      "You do great work. But some weeks the phone barely rings, and you can't figure out why.",
    metric: "0–2 calls/week",
    status: "critical",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 3v18h18M7 16l4-8 4 4 5-8" />
      </svg>
    ),
    title: "Competitors outranking you",
    description:
      "Search your service in your town. They're on the map. You're buried on page two—or not there at all.",
    metric: "Page 2+",
    status: "warning",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Tired of empty sales pitches",
    description:
      "Agencies promise the moon, send reports full of jargon, and your business still feels invisible online.",
    metric: "No clarity",
    status: "neutral",
  },
];

const statusColors = {
  critical: "text-red-400 bg-red-400/10 border-red-400/20",
  warning: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  neutral: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20",
};

export function ProblemSection() {
  return (
    <Section id="problem" label="Why this feels so hard">
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          You&apos;re great at your work.{" "}
          <span className="text-zinc-500">Online, you&apos;re invisible.</span>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400">
          Most agencies sell clicks. The real problem is your business lacks the
          infrastructure to be found, trusted, and called.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card group relative overflow-hidden rounded-xl p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  {problem.icon}
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusColors[problem.status as keyof typeof statusColors]}`}
                >
                  {problem.metric}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {problem.description}
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-zinc-700 to-transparent" />
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400/80" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-600">
                  Needs attention
                </span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
