"use client";

import { motion } from "framer-motion";

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Back dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="glass-panel absolute -right-4 top-0 w-[88%] rounded-2xl p-4 md:-right-8"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="rounded-xl bg-gradient-to-br from-skyward-blue to-cloud-cyan p-5">
          <p className="text-xs font-medium text-white/80">Local visibility</p>
          <p className="mt-1 font-display text-2xl font-bold text-white">
            +34%
          </p>
          <div className="mt-4 flex gap-2">
            {[40, 65, 50, 80, 72, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-white/30"
                style={{ height: `${h * 0.4}px` }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Calls", "Maps", "Forms"].map((label) => (
            <div
              key={label}
              className="rounded-lg bg-surface-subtle px-2 py-2 text-center"
            >
              <p className="text-[10px] text-dusk-gray">{label}</p>
              <p className="text-sm font-semibold text-deep-horizon">↑</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Front floating card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="glass-panel relative mt-24 w-[75%] rounded-2xl p-5 md:mt-28"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-dusk-gray">
          This week
        </p>
        <div className="mt-3 space-y-3">
          {[
            { label: "Google Maps views", value: "412", up: true },
            { label: "Phone calls tracked", value: "18", up: true },
            { label: "Website form fills", value: "6", up: true },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0"
            >
              <span className="text-sm text-dusk-gray">{row.label}</span>
              <span className="font-display text-sm font-bold text-skyward-blue">
                {row.value}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-skyward-blue-muted px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-skyward-blue" />
          <span className="text-xs font-medium text-skyward-blue">
            All systems tracking
          </span>
        </div>
      </motion.div>
    </div>
  );
}
