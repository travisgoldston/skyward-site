"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/components/ui/Section";
import { HeroMockup } from "./HeroMockup";

export function HeroSection() {
  return (
    <section aria-label="Hero" className="px-4 pb-4 pt-24 md:px-6 md:pt-28">
      <div className="hero-gradient relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-14 md:px-12 md:py-20 lg:overflow-visible">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cloud-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/5 blur-2xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-cloud-cyan"
            >
              North Texas · Local service businesses
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
            >
              Rise above the noise.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg"
            >
              We help service businesses break through digital clutter with
              local SEO, conversion-ready websites, and the Google stack. Clear
              systems. Real results. No fluff.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="#contact" variant="hero">
                Get a Free Consultation
              </Button>
              <Button
                href="#services"
                variant="secondary"
                className="border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20 hover:text-white"
              >
                See what we manage
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <HeroMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
