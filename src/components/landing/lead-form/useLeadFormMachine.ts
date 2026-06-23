"use client";

import { useCallback, useState } from "react";
import {
  canGoBack,
  canGoForward,
  createInitialState,
  isOnLastStep,
  isTransitioning,
  settleTransition,
  transitionBack,
  transitionForward,
  updateField,
} from "./machine";
import { getProgress, getStepConfig, getStepIndex } from "./steps";
import type { LeadFormData, LeadFormMachineState } from "./types";

export function useLeadFormMachine() {
  const [state, setState] = useState<LeadFormMachineState>(createInitialState);

  const setField = useCallback((field: keyof LeadFormData, value: string) => {
    setState((prev) => updateField(prev, field, value));
  }, []);

  const goNext = useCallback(() => {
    setState((prev) => transitionForward(prev));
  }, []);

  const goBack = useCallback(() => {
    setState((prev) => transitionBack(prev));
  }, []);

  const onExitComplete = useCallback(() => {
    setState((prev) => settleTransition(prev));
  }, []);

  const currentStep = getStepConfig(state.step);

  return {
    state,
    currentStep,
    stepNumber: getStepIndex(state.step) + 1,
    progress: getProgress(state.step),
    isSuccess: state.phase === "success",
    isTransitioning: isTransitioning(state),
    canProceed: canGoForward(state),
    canGoBack: canGoBack(state),
    isLastStep: isOnLastStep(state.step),
    direction: state.direction,
    data: state.data,
    setField,
    goNext,
    goBack,
    onExitComplete,
  };
}

export type LeadFormMachine = ReturnType<typeof useLeadFormMachine>;
