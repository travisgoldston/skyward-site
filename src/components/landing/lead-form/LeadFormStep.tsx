"use client";

import type { LeadFormMachine } from "./useLeadFormMachine";
import { BUSINESS_TYPES } from "./steps";

interface LeadFormStepProps {
  machine: LeadFormMachine;
}

export function LeadFormStep({ machine }: LeadFormStepProps) {
  const { currentStep, data, setField } = machine;
  const inputClass =
    "w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30";

  return (
    <>
      <h3 className="text-xl font-bold text-white md:text-2xl">
        {currentStep.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-500">{currentStep.subtitle}</p>

      <div className="mt-6">
        {currentStep.type === "text" && currentStep.field !== "contact" && (
          <input
            type="text"
            value={data[currentStep.field]}
            onChange={(e) =>
              setField(currentStep.field as keyof typeof data, e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" && machine.canProceed) machine.goNext();
            }}
            placeholder={currentStep.placeholder}
            className={inputClass}
            autoFocus
          />
        )}

        {currentStep.type === "textarea" && (
          <textarea
            value={data.frustration}
            onChange={(e) => setField("frustration", e.target.value)}
            placeholder={currentStep.placeholder}
            rows={4}
            className={`${inputClass} resize-none`}
            autoFocus
          />
        )}

        {currentStep.type === "contact" && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="lead-email"
                className="mb-1.5 block text-xs font-medium text-zinc-500"
              >
                Email
              </label>
              <input
                id="lead-email"
                type="email"
                value={data.email}
                onChange={(e) => setField("email", e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && machine.canProceed) machine.goNext();
                }}
                placeholder="you@yourbusiness.com"
                className={inputClass}
                autoFocus
              />
            </div>
            <div>
              <label
                htmlFor="lead-phone"
                className="mb-1.5 block text-xs font-medium text-zinc-500"
              >
                Phone
              </label>
              <input
                id="lead-phone"
                type="tel"
                value={data.phone}
                onChange={(e) => setField("phone", e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && machine.canProceed) machine.goNext();
                }}
                placeholder="(555) 123-4567"
                className={inputClass}
              />
            </div>
          </div>
        )}

        {currentStep.field === "businessType" && (
          <div className="mt-4 flex flex-wrap gap-2">
            {BUSINESS_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setField("businessType", type)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                  data.businessType === type
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
    </>
  );
}
