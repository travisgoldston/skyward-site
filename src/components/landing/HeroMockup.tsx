"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Google Maps views", value: "412" },
  { label: "Phone calls tracked", value: "18" },
  { label: "Website form fills", value: "6" },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[400px] md:h-[340px] md:max-w-[440px]">
      {/* Back dashboard window */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 1 }}
        transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 z-0 w-[92%] overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl shadow-deep-horizon/20"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        <div className="p-4">
          <div className="rounded-xl bg-gradient-to-br from-skyward-blue via-[#2a8fd4] to-cloud-cyan p-5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">
              Local visibility
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-white">
              +34%
            </p>
            <div className="mt-5 flex h-12 items-end gap-1.5">
              {[35, 55, 42, 68, 58, 78, 72, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-white/35"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Calls", "Maps", "Forms"].map((label) => (
              <div
                key={label}
                className="rounded-lg bg-surface-subtle px-2 py-2.5 text-center"
              >
                <p className="text-[10px] font-medium text-dusk-gray">{label}</p>
                <p className="mt-0.5 text-sm font-bold text-skyward-blue">↑</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Front stats card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 z-10 w-[80%] rounded-2xl border border-white/30 bg-white/95 p-5 shadow-xl shadow-deep-horizon/15 backdrop-blur-sm"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-dusk-gray">
          This week
        </p>

        <ul className="mt-3 space-y-2.5">
          {stats.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2.5 last:border-0 last:pb-0"
            >
              <span className="text-sm text-dusk-gray">{row.label}</span>
              <span className="font-display text-base font-bold tabular-nums text-skyward-blue">
                {row.value}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-skyward-blue-muted px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-skyward-blue" />
          <span className="text-xs font-medium text-skyward-blue">
            All systems tracking
          </span>
        </div>
      </motion.div>
    </div>
  );
}
