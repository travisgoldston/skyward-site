export interface LeadFormData {
  name: string;
  businessType: string;
  frustration: string;
  email: string;
  phone: string;
}

export type StepId = "name" | "business" | "frustration" | "contact";

export type MachinePhase = "active" | "transitioning" | "success";

export type TransitionDirection = "forward" | "back";

export interface LeadFormMachineState {
  phase: MachinePhase;
  step: StepId;
  pendingStep: StepId | null;
  direction: TransitionDirection;
  data: LeadFormData;
}

export type StepField = keyof LeadFormData | "contact";

export interface StepConfig {
  id: StepId;
  title: string;
  subtitle: string;
  field: StepField;
  type: "text" | "textarea" | "contact";
  placeholder: string;
}

export const INITIAL_FORM_DATA: LeadFormData = {
  name: "",
  businessType: "",
  frustration: "",
  email: "",
  phone: "",
};

export const INITIAL_MACHINE_STATE: LeadFormMachineState = {
  phase: "active",
  step: "name",
  pendingStep: null,
  direction: "forward",
  data: INITIAL_FORM_DATA,
};
