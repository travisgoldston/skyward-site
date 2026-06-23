"use client";

import type { LeadFormMachine } from "./useLeadFormMachine";
import { BUSINESS_TYPES } from "./steps";

interface LeadFormStepProps {
  machine: LeadFormMachine;
}

export function LeadFormStep({ machine }: LeadFormStepProps) {
  const { currentStep, data, setField } = machine;
  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-brand/50 focus:ring-2 focus:ring-blue-brand/15";

  return (
    <>
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
        {currentStep.title}
      </h3>
      <p className="mt-2 text-sm text-slate-500">{currentStep.subtitle}</p>

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
                className="mb-1.5 block text-xs font-medium text-slate-500"
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
                className="mb-1.5 block text-xs font-medium text-slate-500"
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
                    ? "border-green-brand bg-green-brand-muted text-green-brand"
                    : "border-slate-200 text-slate-500 hover:border-blue-brand/40 hover:text-blue-brand"
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
