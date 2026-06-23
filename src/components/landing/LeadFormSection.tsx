"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal } from "@/components/ui/Section";
import { getSlideOffset } from "./lead-form/machine";
import { FORM_STEPS } from "./lead-form/steps";
import { LeadFormStep } from "./lead-form/LeadFormStep";
import { LeadFormSuccess } from "./lead-form/LeadFormSuccess";
import { useLeadFormMachine } from "./lead-form/useLeadFormMachine";

export function LeadFormSection() {
  const machine = useLeadFormMachine();
  const {
    state,
    progress,
    stepNumber,
    isSuccess,
    isTransitioning,
    canProceed,
    canGoBack,
    isLastStep,
    direction,
    goNext,
    goBack,
    onExitComplete,
  } = machine;

  const slide = getSlideOffset(direction);

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
          {!isSuccess && (
            <div className="mb-8">
              <div className="mb-2 flex justify-between text-xs text-zinc-500">
                <span>
                  Step {stepNumber} of {FORM_STEPS.length}
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
          )}

          <div className="glass-card overflow-hidden rounded-2xl p-8 md:p-10">
            <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <LeadFormSuccess />
                </motion.div>
              ) : (
                <motion.div
                  key={state.step}
                  initial={{ opacity: 0, x: slide.enter }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slide.exit }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <LeadFormStep machine={machine} />

                  <div className="mt-8 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={!canGoBack || isTransitioning}
                      className="text-sm text-zinc-500 transition-colors hover:text-white disabled:invisible"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canProceed || isTransitioning}
                      className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98]"
                    >
                      {isLastStep ? "Submit" : "Continue"}
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
