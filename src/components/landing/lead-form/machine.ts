import { getNextStep, getPrevStep, isStepValid } from "./steps";
import type {
  LeadFormData,
  LeadFormMachineState,
  StepId,
  TransitionDirection,
} from "./types";
import { INITIAL_MACHINE_STATE } from "./types";

/** Pure transition: update a single field without changing step. */
export function updateField(
  state: LeadFormMachineState,
  field: keyof LeadFormData,
  value: string,
): LeadFormMachineState {
  if (state.phase === "success") return state;

  return {
    ...state,
    data: { ...state.data, [field]: value },
  };
}

/**
 * Advance to the next step (or success). Step changes immediately so
 * AnimatePresence can run the exit → enter sequence on key change.
 */
export function transitionForward(
  state: LeadFormMachineState,
): LeadFormMachineState {
  if (state.phase === "transitioning" || state.phase === "success") return state;
  if (!isStepValid(state.step, state.data)) return state;

  const next = getNextStep(state.step);

  if (next) {
    return {
      ...state,
      step: next,
      direction: "forward",
      phase: "transitioning",
      pendingStep: null,
    };
  }

  return {
    ...state,
    phase: "success",
    direction: "forward",
    pendingStep: null,
  };
}

/** Go back one step with a reverse slide. */
export function transitionBack(
  state: LeadFormMachineState,
): LeadFormMachineState {
  if (state.phase === "transitioning" || state.phase === "success") return state;

  const prev = getPrevStep(state.step);
  if (!prev) return state;

  return {
    ...state,
    step: prev,
    direction: "back",
    phase: "transitioning",
    pendingStep: null,
  };
}

/** Called by AnimatePresence after the exit animation finishes. */
export function settleTransition(
  state: LeadFormMachineState,
): LeadFormMachineState {
  if (state.phase !== "transitioning") return state;
  return { ...state, phase: "active" };
}

export function canGoBack(state: LeadFormMachineState): boolean {
  return state.phase === "active" && getPrevStep(state.step) !== null;
}

export function canGoForward(state: LeadFormMachineState): boolean {
  return state.phase === "active" && isStepValid(state.step, state.data);
}

export function isOnLastStep(step: StepId): boolean {
  return getNextStep(step) === null;
}

export function isTransitioning(state: LeadFormMachineState): boolean {
  return state.phase === "transitioning";
}

export function getSlideOffset(direction: TransitionDirection): {
  enter: number;
  exit: number;
} {
  return direction === "forward"
    ? { enter: 24, exit: -24 }
    : { enter: -24, exit: 24 };
}

export function createInitialState(): LeadFormMachineState {
  return { ...INITIAL_MACHINE_STATE, data: { ...INITIAL_MACHINE_STATE.data } };
}
