"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden px-5 pb-24 pt-32 md:pb-32 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-brand/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-green-brand/6 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-6xl"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-brand" />
          Digital infrastructure for North Texas
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
        >
          Get found on Google.{" "}
          <span className="text-blue-brand">Get more calls.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
        >
          We build digital infrastructure for local businesses across North
          Texas so your phone rings and your calendar fills. No marketing degree
          required.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#contact">Book a Strategy Call</Button>
          <Button href="#contact" variant="secondary">
            Get a Free Visibility Check
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-200 pt-10 md:grid-cols-4"
        >
          {[
            { stat: "Local SEO", label: "Map visibility", color: "blue" },
            { stat: "Web Design", label: "Built to convert", color: "green" },
            { stat: "Google Stack", label: "Full tracking", color: "blue" },
            { stat: "Direct Access", label: "No ticket systems", color: "green" },
          ].map((item) => (
            <div key={item.stat} className="group">
              <p
                className={`text-sm font-semibold text-slate-800 transition-colors ${
                  item.color === "blue"
                    ? "group-hover:text-blue-brand"
                    : "group-hover:text-green-brand"
                }`}
              >
                {item.stat}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
