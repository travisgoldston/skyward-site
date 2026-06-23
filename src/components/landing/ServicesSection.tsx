"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const pillars = [
  {
    id: "seo",
    label: "Local SEO",
    tagline: "Getting clearly on the map",
    color: "blue" as const,
    description:
      "Google Business Profile optimization, local citations, review strategy, and service-area pages so you show up when neighbors search for what you do.",
    features: [
      "Google Business Profile setup & optimization",
      "Local keyword & service-area targeting",
      "Review capture systems",
      "Monthly ranking & visibility reports",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
      </svg>
    ),
  },
  {
    id: "web",
    label: "Web Design",
    tagline: "Turning visitors into calls",
    color: "green" as const,
    description:
      "Fast, mobile-first sites built for conversion—not vanity. Clear calls-to-action, click-to-call, and forms that actually get filled out.",
    features: [
      "Mobile-first, speed-optimized builds",
      "Conversion-focused page structure",
      "Click-to-call & lead capture forms",
      "Ongoing updates & maintenance",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "google",
    label: "Google Stack",
    tagline: "Conversion tracking & infrastructure",
    color: "blue" as const,
    description:
      "Analytics, Tag Manager, conversion tracking, and call attribution so you know exactly what's driving leads—not guessing from a vague monthly report.",
    features: [
      "Google Analytics 4 setup",
      "Conversion & call tracking",
      "Tag Manager implementation",
      "Plain-English performance dashboards",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  const [active, setActive] = useState("seo");
  const current = pillars.find((p) => p.id === active)!;
  const isBlue = current.color === "blue";

  return (
    <Section id="services" label="What we manage for you" className="border-t border-slate-200/80">
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Operational infrastructure,{" "}
          <span className="text-slate-400">not marketing theater.</span>
        </h2>
        <p className="mt-4 max-w-xl text-slate-600">
          Three pillars. One system. Everything connected so your online
          presence actually drives calls.
        </p>
      </Reveal>

      <div className="mt-12">
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-1.5 sm:flex-row sm:gap-1">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActive(pillar.id)}
              className={`relative rounded-lg px-5 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                active === pillar.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {active === pillar.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-lg ${pillar.color === "blue" ? "bg-blue-brand" : "bg-green-brand"}`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{pillar.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid gap-4 md:grid-cols-5"
          >
            <div className={`glass-card rounded-xl p-8 md:col-span-3 ${isBlue ? "accent-glow" : "green-glow"}`}>
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${
                  isBlue
                    ? "border-blue-brand/20 bg-blue-brand-muted text-blue-brand"
                    : "border-green-brand/20 bg-green-brand-muted text-green-brand"
                }`}
              >
                {current.icon}
              </div>
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${isBlue ? "text-blue-brand" : "text-green-brand"}`}
              >
                {current.tagline}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {current.label}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {current.description}
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 md:col-span-2">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                What&apos;s included
              </p>
              <ul className="space-y-3">
                {current.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <svg
                      className={`mt-0.5 shrink-0 ${isBlue ? "text-blue-brand" : "text-green-brand"}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
