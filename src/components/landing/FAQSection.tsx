"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const faqs = [
  {
    question: "How long before I see results?",
    answer:
      "Local SEO typically shows movement in 60–90 days, with stronger results at 4–6 months. Web changes can improve conversions immediately. We'll set honest expectations on your strategy call based on your market and starting point.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. After the initial setup period, engagements are month-to-month. We keep clients by delivering results, not by locking them in.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Most clients do. We audit what you have, fix what's broken, and improve what's working. Full rebuilds aren't always necessary — sometimes it's tracking, speed, and local SEO that make the difference.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Me. Skyward Works is intentionally small. You work directly with the person building your infrastructure — not a rotating cast of account managers.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Melissa, Texas and serve local service businesses across North Texas — McKinney, Frisco, Allen, Plano, Prosper, Celina, Anna, and surrounding areas.",
  },
  {
    question: "What does the free visibility check include?",
    answer:
      "We'll look at your Google Business Profile, local search presence, website basics, and how you compare to top competitors in your area. You'll get an honest snapshot — not a sales pitch disguised as an audit.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" label="FAQ" className="border-t border-slate-200/80">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Straight answers.
        </h2>
        <p className="mt-4 text-slate-600">
          No fine print. No jargon. Just what you need to know.
        </p>
      </Reveal>

      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.05}>
            <div>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-blue-brand"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                    openIndex === i
                      ? "border-blue-brand bg-blue-brand-muted text-blue-brand"
                      : "border-slate-200 text-slate-400"
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
                    <p className="pb-5 text-sm leading-relaxed text-slate-600">
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
