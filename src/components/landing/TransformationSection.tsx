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
      className="border-t border-slate-200/80"
    >
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          What changes when the infrastructure is in place.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="glass-card h-full rounded-xl border-red-100 p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-500">
                ✕
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-500">
                Before
              </p>
            </div>
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              Some weeks packed, others silent. Marketing feels like a black box.
            </p>
            <ul className="mt-6 space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-500"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card green-glow h-full rounded-xl border-green-brand/20 p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-brand-muted text-xs font-bold text-green-brand">
                ✓
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-brand">
                After
              </p>
            </div>
            <p className="text-lg font-medium leading-relaxed text-slate-900">
              Steady demand. Clear view of what&apos;s working. More time for the
              business.
            </p>
            <ul className="mt-6 space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <svg
                    className="mt-0.5 shrink-0 text-green-brand"
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
