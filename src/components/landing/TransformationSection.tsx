"use client";

import { Section, Reveal } from "@/components/ui/Section";

const beforeItems = [
  "Busy some weeks, dead the next",
  "No idea what's driving leads",
  "Competitors showing up, you're not",
  "Paying for reports you don't read",
];

const afterItems = [
  "Steadier flow of local leads",
  "Clear picture of what's working",
  "Visible on Maps and search",
  "Plain-English updates you can act on",
];

export function TransformationSection() {
  return (
    <Section
      id="transformation"
      label="The shift"
      className="border-t border-slate-100 bg-surface-subtle"
    >
      <Reveal>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-deep-horizon md:text-4xl">
          What changes when the systems are in place.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="glass-card h-full rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-dusk-gray-light">
              Before
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-deep-horizon">
              Marketing feels like a black box.
            </p>
            <ul className="mt-6 space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-dusk-gray"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dusk-gray-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card accent-glow h-full rounded-2xl border-skyward-blue/20 p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-skyward-blue">
              After
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-deep-horizon">
              Steady demand. Clear numbers. More time for the work.
            </p>
            <ul className="mt-6 space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-deep-horizon"
                >
                  <svg
                    className="mt-0.5 shrink-0 text-skyward-blue"
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
