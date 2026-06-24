"use client";

import { motion } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";
import { BrandMark } from "@/components/ui/BrandMark";

const messages = [
  {
    from: "client",
    text: "Are we showing up better on Google yet?",
    time: "9:14 AM",
  },
  {
    from: "agency",
    text: "Yes — you hit the map pack for \"plumber McKinney.\" 4 new calls logged this week. Sending the breakdown now.",
    time: "9:17 AM",
  },
  {
    from: "client",
    text: "That's what I needed. Thanks.",
    time: "9:18 AM",
  },
];

export function DifferentiatorSection() {
  return (
    <Section
      id="differentiator"
      label="How we work"
      className="border-t border-slate-100 bg-white"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-deep-horizon md:text-4xl">
            No account manager.{" "}
            <span className="text-skyward-blue">Just me.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-dusk-gray">
            When something changes with your rankings, your site, or your leads —
            you hear about it in plain English. Directly from the person doing
            the work.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Text and email access — no portal login required",
              "Updates you can actually understand",
              "One person accountable for your results",
              "No handoffs, no ticket queues",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-deep-horizon"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cloud-cyan-muted text-skyward-blue">
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
              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <BrandMark size={36} className="shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-deep-horizon">
                    Skyward Works
                  </p>
                  <p className="text-xs text-dusk-gray-light">Usually replies fast</p>
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
                          ? "rounded-br-sm bg-skyward-blue text-white"
                          : "rounded-bl-sm border border-slate-200 bg-white text-deep-horizon"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`mt-1 text-[10px] ${
                          msg.from === "agency"
                            ? "text-white/60"
                            : "text-dusk-gray-light"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
