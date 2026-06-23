"use client";

import { Section, Reveal } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const principles = [
  {
    title: "Not the cheapest",
    description:
      "Cheap SEO and template sites cost you more in missed calls. We price for work that actually moves the needle.",
    color: "blue" as const,
  },
  {
    title: "Not locked in",
    description:
      "Month-to-month after setup. If it's not working, you shouldn't be trapped in a 12-month contract.",
    color: "green" as const,
  },
  {
    title: "Built to feel fair",
    description:
      "You know what you're paying for, what we're doing, and what changed each month. No surprise invoices.",
    color: "blue" as const,
  },
];

const includes = [
  "Local SEO & Google Business Profile management",
  "Website hosting, updates & maintenance",
  "Google Analytics & conversion tracking",
  "Monthly plain-English performance update",
  "Direct access — no account manager layer",
];

export function PricingSection() {
  return (
    <Section
      id="pricing"
      label="Investment"
      className="border-t border-slate-200/80"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Not the cheapest. Not locked in.{" "}
            <span className="text-slate-400">Built to feel fair.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Every business is different. Setup depends on where you&apos;re
            starting from. Ongoing management is straightforward.
          </p>

          <div className="mt-8 space-y-4">
            {principles.map((item) => (
              <div
                key={item.title}
                className={`border-l-2 pl-4 ${item.color === "blue" ? "border-blue-brand/50" : "border-green-brand/50"}`}
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-card accent-glow rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Starting range
            </p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-blue-brand md:text-5xl">
                $650
              </span>
              <span className="text-lg text-slate-400">to</span>
              <span className="text-4xl font-bold text-green-brand md:text-5xl">
                $900
              </span>
              <span className="text-sm text-slate-500">/mo</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">after setup</p>

            <div className="my-6 h-px bg-slate-200" />

            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Typical engagement includes
            </p>
            <ul className="space-y-3">
              {includes.map((item) => (
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

            <div className="mt-8 rounded-lg border border-slate-200 bg-surface-subtle p-4">
              <p className="text-xs text-slate-500">
                One-time setup typically runs{" "}
                <span className="font-semibold text-slate-700">
                  $1,500–$3,500
                </span>{" "}
                depending on current site condition, competition level, and
                scope. We&apos;ll give you an exact number on the strategy call.
              </p>
            </div>

            <Button href="#contact" className="mt-6 w-full text-center">
              Book a Strategy Call
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
