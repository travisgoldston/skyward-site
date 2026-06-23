"use client";

import { motion } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const messages = [
  {
    from: "client",
    text: "Hey, are we showing up better on Google yet?",
    time: "9:14 AM",
  },
  {
    from: "agency",
    text: "Yes — you moved from page 2 to the local map pack for \"plumber McKinney.\" Got 4 new calls logged this week. I'll send the breakdown.",
    time: "9:17 AM",
  },
  {
    from: "client",
    text: "That's exactly what I needed to know. Thanks.",
    time: "9:18 AM",
  },
];

export function DifferentiatorSection() {
  return (
    <Section
      id="differentiator"
      label="How we work"
      className="border-t border-slate-200/80"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            You don&apos;t get an account manager.{" "}
            <span className="text-green-brand">You get me.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            No ticket systems. No junior rep reading from a script. When
            something changes with your visibility, your rankings, or your site —
            you hear about it in plain English, directly from the person doing
            the work.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Direct text and email access — no portal required",
              "Updates in plain English, not marketing jargon",
              "One person accountable for your results",
              "No handoffs, no \"I'll check with my team\"",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-brand-muted text-green-brand">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto max-w-sm">
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-brand-muted text-xs font-bold text-blue-brand">
                  SW
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Skyward Works
                  </p>
                  <p className="text-xs text-slate-400">Usually replies fast</p>
                </div>
              </div>

              <div className="space-y-3 bg-surface-subtle px-4 py-5">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className={`flex ${msg.from === "agency" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                        msg.from === "agency"
                          ? "rounded-br-sm bg-blue-brand text-white"
                          : "rounded-bl-sm border border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`mt-1 text-[10px] ${
                          msg.from === "agency"
                            ? "text-blue-100"
                            : "text-slate-400"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">
                  <span className="text-sm text-slate-400">iMessage</span>
                  <div className="ml-auto h-6 w-6 rounded-full bg-green-brand-muted" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
