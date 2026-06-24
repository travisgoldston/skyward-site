"use client";

import { Section, Reveal } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const principles = [
  {
    title: "Not the cheapest",
    description:
      "Cheap SEO costs more in missed calls. We price for work that moves the needle.",
  },
  {
    title: "Not locked in",
    description:
      "Month-to-month after setup. If it's not working, you shouldn't be stuck.",
  },
  {
    title: "Built to feel fair",
    description:
      "You know what you're paying for and what changed each month. No surprises.",
  },
];

const includes = [
  "Local SEO & Google Business Profile",
  "Website hosting, updates & maintenance",
  "Google Analytics & conversion tracking",
  "Monthly plain-English update",
  "Direct access — no middleman",
];

export function PricingSection() {
  return (
    <Section
      id="pricing"
      label="Investment"
      className="border-t border-slate-100 bg-white"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-deep-horizon md:text-4xl">
            Straightforward pricing.{" "}
            <span className="text-dusk-gray">No lock-ins.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-dusk-gray">
            Every business starts somewhere different. Setup depends on where you
            are today. Ongoing management is simple.
          </p>

          <div className="mt-8 space-y-4">
            {principles.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-skyward-blue/40 pl-4"
              >
                <p className="font-display font-semibold text-deep-horizon">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-dusk-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-card accent-glow rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-dusk-gray-light">
              Starting range
            </p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-skyward-blue md:text-5xl">
                $650
              </span>
              <span className="text-lg text-dusk-gray-light">to</span>
              <span className="font-display text-4xl font-bold text-deep-horizon md:text-5xl">
                $900
              </span>
              <span className="text-sm text-dusk-gray">/mo</span>
            </div>
            <p className="mt-2 text-sm text-dusk-gray">after setup</p>

            <div className="my-6 h-px bg-slate-100" />

            <ul className="space-y-3">
              {includes.map((item) => (
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

            <div className="mt-8 rounded-xl bg-surface-subtle p-4">
              <p className="text-xs text-dusk-gray">
                One-time setup typically runs{" "}
                <span className="font-semibold text-deep-horizon">
                  $1,500–$3,500
                </span>{" "}
                depending on scope. We&apos;ll give you an exact number on the
                consultation call.
              </p>
            </div>

            <Button href="#contact" className="mt-6 w-full text-center">
              Get a Free Consultation
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
