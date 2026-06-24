"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const faqs = [
  {
    question: "How long before I see results?",
    answer:
      "Local SEO usually shows movement in 60–90 days, with stronger results around 4–6 months. Website changes can improve conversions right away. We'll set honest expectations on your first call.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. After setup, it's month-to-month. We keep clients by delivering — not by locking them in.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Most clients do. We audit what you have, fix what's broken, and improve what's working. A full rebuild isn't always necessary.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Me. Skyward Works is intentionally small. You work directly with the person building your systems.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Based in Melissa, Texas — serving McKinney, Frisco, Allen, Plano, Prosper, Celina, Anna, and surrounding North Texas areas.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "We'll look at your Google presence, website basics, and how you stack up against local competitors. Honest snapshot — not a disguised sales pitch.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      label="FAQ"
      className="border-t border-slate-100 bg-surface-subtle"
    >
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-deep-horizon md:text-4xl">
          Straight answers.
        </h2>
        <p className="mt-4 text-dusk-gray">No fine print. No jargon.</p>
      </Reveal>

      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200 bg-white">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.05}>
            <div className="px-1">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-sm font-semibold text-deep-horizon md:text-base">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                    openIndex === i
                      ? "border-skyward-blue bg-skyward-blue-muted text-skyward-blue"
                      : "border-slate-200 text-dusk-gray-light"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-dusk-gray">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
