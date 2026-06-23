"use client";

import { Section, Reveal } from "@/components/ui/Section";

const beforeItems = [
  "Some weeks packed, others silent",
  "Marketing feels like a black box",
  "No idea which leads came from where",
  "Competitors showing up, you're not",
  "Paying for reports you don't understand",
];

const afterItems = [
  "Steady demand from local search",
  "Clear view of what's working",
  "More time for the business itself",
  "Visible on Google Maps & search",
  "Plain-English updates you can act on",
];

export function TransformationSection() {
  return (
    <Section
      id="transformation"
      label="The transformation"
      className="border-t border-zinc-800/40"
    >
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          What changes when the infrastructure is in place.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="glass-card h-full rounded-xl border-red-900/20 p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400">
                ✕
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Before
              </p>
            </div>
            <p className="text-lg font-medium leading-relaxed text-zinc-300">
              Some weeks packed, others silent. Marketing feels like a black box.
            </p>
            <ul className="mt-6 space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-500"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card accent-glow h-full rounded-xl border-accent/20 p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                ✓
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                After
              </p>
            </div>
            <p className="text-lg font-medium leading-relaxed text-white">
              Steady demand. Clear view of what&apos;s working. More time for the
              business.
            </p>
            <ul className="mt-6 space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <svg
                    className="mt-0.5 shrink-0 text-accent"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
