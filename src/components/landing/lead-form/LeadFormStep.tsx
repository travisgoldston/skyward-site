"use client";

import type { LeadFormMachine } from "./useLeadFormMachine";
import { BUSINESS_TYPES } from "./steps";

interface LeadFormStepProps {
  machine: LeadFormMachine;
}

export function LeadFormStep({ machine }: LeadFormStepProps) {
  const { currentStep, data, setField } = machine;
  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-deep-horizon placeholder:text-dusk-gray-light outline-none transition-colors focus:border-skyward-blue/50 focus:ring-2 focus:ring-skyward-blue/10";

  return (
    <>
      <h3 className="font-display text-xl font-bold text-deep-horizon md:text-2xl">
        {currentStep.title}
      </h3>
      <p className="mt-2 text-sm text-dusk-gray">{currentStep.subtitle}</p>

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
                className="mb-1.5 block text-xs font-medium text-dusk-gray"
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
                className="mb-1.5 block text-xs font-medium text-dusk-gray"
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
                    ? "border-skyward-blue bg-skyward-blue-muted text-skyward-blue"
                    : "border-slate-200 text-dusk-gray hover:border-skyward-blue/40 hover:text-skyward-blue"
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
