"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";

interface FormData {
  name: string;
  businessType: string;
  frustration: string;
  email: string;
  phone: string;
}

const steps = [
  {
    id: "name",
    title: "What's your name?",
    subtitle: "So we know who we're talking to.",
    field: "name" as const,
    type: "text",
    placeholder: "John Smith",
  },
  {
    id: "business",
    title: "What type of business do you run?",
    subtitle: "Plumber, HVAC, electrician, landscaper — you get the idea.",
    field: "businessType" as const,
    type: "text",
    placeholder: "e.g. Residential plumbing",
  },
  {
    id: "frustration",
    title: "What's your biggest marketing frustration?",
    subtitle: "Be honest. This helps us prepare for your call.",
    field: "frustration" as const,
    type: "textarea",
    placeholder: "The phone doesn't ring enough, competitors outrank us, tired of agencies that overpromise...",
  },
  {
    id: "contact",
    title: "How can we reach you?",
    subtitle: "We'll follow up within one business day.",
    field: "contact" as const,
    type: "contact",
    placeholder: "",
  },
];

const businessTypes = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Landscaping",
  "Roofing",
  "Other home service",
];

export function LeadFormSection() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessType: "",
    frustration: "",
    email: "",
    phone: "",
  });

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const canProceed = () => {
    if (current.field === "name") return formData.name.trim().length > 0;
    if (current.field === "businessType")
      return formData.businessType.trim().length > 0;
    if (current.field === "frustration")
      return formData.frustration.trim().length > 0;
    if (current.field === "contact")
      return formData.email.trim().length > 0 && formData.phone.trim().length > 0;
    return false;
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <Section
      id="contact"
      label="Get started"
      className="border-t border-zinc-800/40"
    >
      <Reveal>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let&apos;s see where you stand.
        </h2>
        <p className="mt-4 text-zinc-400">
          Answer a few quick questions. We&apos;ll review your visibility and
          follow up with honest feedback — no pitch deck required.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-xl">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-xs text-zinc-500">
              <span>
                Step {step + 1} of {steps.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-accent"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    You&apos;re on the list.
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    We&apos;ll review your info and reach out within one business
                    day. Talk soon.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    {current.subtitle}
                  </p>

                  <div className="mt-6">
                    {current.type === "text" && current.field !== "contact" && (
                      <input
                        type="text"
                        value={formData[current.field]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [current.field]: e.target.value,
                          })
                        }
                        placeholder={current.placeholder}
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                        autoFocus
                      />
                    )}

                    {current.type === "textarea" && (
                      <textarea
                        value={formData.frustration}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            frustration: e.target.value,
                          })
                        }
                        placeholder={current.placeholder}
                        rows={4}
                        className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                        autoFocus
                      />
                    )}

                    {current.type === "contact" && (
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-xs font-medium text-zinc-500"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="you@yourbusiness.com"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                            autoFocus
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1.5 block text-xs font-medium text-zinc-500"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="(555) 123-4567"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                          />
                        </div>
                      </div>
                    )}

                    {current.field === "businessType" && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {businessTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, businessType: type })
                            }
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                              formData.businessType === type
                                ? "border-accent bg-accent/10 text-accent"
                                : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={step === 0}
                      className="text-sm text-zinc-500 transition-colors hover:text-white disabled:invisible"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98]"
                    >
                      {step === steps.length - 1 ? "Submit" : "Continue"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
