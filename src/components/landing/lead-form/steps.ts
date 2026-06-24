import type { LeadFormData, StepConfig, StepId } from "./types";

export const FORM_STEPS: StepConfig[] = [
  {
    id: "name",
    title: "What's your name?",
    subtitle: "So we know who we're talking to.",
    field: "name",
    type: "text",
    placeholder: "John Smith",
  },
  {
    id: "business",
    title: "What type of business do you run?",
    subtitle: "Plumber, HVAC, electrician, landscaper — you get the idea.",
    field: "businessType",
    type: "text",
    placeholder: "e.g. Residential plumbing",
  },
  {
    id: "frustration",
    title: "What's getting in the way?",
    subtitle: "Be honest — it helps us prepare for your call.",
    field: "frustration",
    type: "textarea",
    placeholder:
      "The phone doesn't ring enough, competitors outrank us, tired of agencies that overpromise...",
  },
  {
    id: "contact",
    title: "How can we reach you?",
    subtitle: "We'll follow up within one business day.",
    field: "contact",
    type: "contact",
    placeholder: "",
  },
];

export const STEP_ORDER: StepId[] = FORM_STEPS.map((s) => s.id);

export const BUSINESS_TYPES = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Landscaping",
  "Roofing",
  "Other home service",
] as const;

export function getStepIndex(step: StepId): number {
  return STEP_ORDER.indexOf(step);
}

export function getStepConfig(step: StepId): StepConfig {
  return FORM_STEPS[getStepIndex(step)];
}

export function getNextStep(step: StepId): StepId | null {
  const index = getStepIndex(step);
  return index < STEP_ORDER.length - 1 ? STEP_ORDER[index + 1] : null;
}

export function getPrevStep(step: StepId): StepId | null {
  const index = getStepIndex(step);
  return index > 0 ? STEP_ORDER[index - 1] : null;
}

export function isStepValid(step: StepId, data: LeadFormData): boolean {
  switch (step) {
    case "name":
      return data.name.trim().length > 0;
    case "business":
      return data.businessType.trim().length > 0;
    case "frustration":
      return data.frustration.trim().length > 0;
    case "contact":
      return data.email.trim().length > 0 && data.phone.trim().length > 0;
    default:
      return false;
  }
}

export function getProgress(step: StepId): number {
  return ((getStepIndex(step) + 1) / STEP_ORDER.length) * 100;
}
