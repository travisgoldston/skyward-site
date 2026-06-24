"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Google Maps views", value: "412" },
  { label: "Phone calls tracked", value: "18" },
  { label: "Website form fills", value: "6" },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Back — frosted dashboard window */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative ml-auto w-[94%] overflow-hidden rounded-2xl border border-white/25 bg-white/20 shadow-2xl shadow-black/10 backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5 border-b border-white/20 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="p-4 pb-6">
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-skyward-blue via-[#2488cc] to-cloud-cyan p-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/75">
              Local visibility
            </p>
            <p className="mt-1 font-display text-4xl font-bold leading-none text-white">
              +34%
            </p>
            <div className="mt-6 flex h-16 items-end gap-1.5">
              {[30, 48, 38, 62, 52, 70, 64, 82, 76, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[2px] bg-white/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Front — solid stats card overlapping bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-2 left-0 z-10 w-[76%] rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(12,30,53,0.18)]"
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest text-dusk-gray">
          This week
        </p>

        <ul className="mt-4 space-y-3">
          {stats.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-6"
            >
              <span className="text-[13px] text-dusk-gray">{row.label}</span>
              <span className="font-display text-lg font-bold tabular-nums text-skyward-blue">
                {row.value}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e8f2fa] px-3.5 py-2">
          <span className="h-2 w-2 rounded-full bg-skyward-blue" />
          <span className="text-xs font-semibold text-skyward-blue">
            All systems tracking
          </span>
        </div>
      </motion.div>

      {/* Spacer so overlapping card doesn't clip */}
      <div className="h-14" aria-hidden />
    </div>
  );
}
