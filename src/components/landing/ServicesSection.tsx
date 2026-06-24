"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

const services = [
  {
    title: "Local SEO",
    description:
      "Show up on Google Maps and local search when neighbors look for what you do. Profiles, citations, reviews, and service-area pages — handled.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Web Design",
    description:
      "Fast, mobile-first sites built to turn visitors into calls. Clear layout, click-to-call, and forms that people actually use.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Google Stack",
    description:
      "Analytics, conversion tracking, and call attribution so you know what's working — not guessing from a vague monthly report.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
      </svg>
    ),
    featured: false,
  },
];

export function ServicesSection() {
  return (
    <Section id="services" label="Our services" className="bg-white">
      <Reveal>
        <h2 className="font-display text-center text-3xl font-bold tracking-tight text-deep-horizon md:text-4xl">
          Grow your online presence
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-dusk-gray">
          Three pillars. One system. Everything connected so your phone actually
          rings.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className={`glass-card relative flex h-full flex-col rounded-2xl p-8 ${
                service.featured ? "border-t-4 border-t-skyward-blue" : ""
              }`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-skyward-blue-muted text-skyward-blue">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-deep-horizon">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-dusk-gray">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-skyward-blue transition-colors hover:text-skyward-blue-hover"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
