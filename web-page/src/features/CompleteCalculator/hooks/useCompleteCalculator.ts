import { useState } from "react";
import { calculateOperation } from "../utils/calculate-operation";
import type { CompleteCalculatorState, Operator } from "../types/complete-calculator";

const INITIAL_COMPLETE_CALCULATOR_STATE: CompleteCalculatorState = {
  previousValue: "",
  currentValue: "0",
  selectedOperator: "",
};

export function useCompleteCalculator() {
  const [state, setState] = useState<CompleteCalculatorState>(INITIAL_COMPLETE_CALCULATOR_STATE);

  const clearCurrentValue = () => {
    setState((currentState) => ({ ...currentState, currentValue: "0" }));
  };

  const deleteLastDigit = () => {
    setState((currentState) => {
      const { currentValue } = currentState;

      if (!currentValue || currentValue === "0" || currentValue === "Error") {
        return currentState;
      }

      if (currentValue.length === 1 || (currentValue.charAt(0) === "-" && currentValue.length === 2)) {
        return { ...currentState, currentValue: "0" };
      }

      return { ...currentState, currentValue: currentValue.slice(0, -1) };
    });
  };

  const appendDigit = (value: string) => {
    setState((currentState) => {
      if (currentState.currentValue === "0" || currentState.currentValue === "Error") {
        return { ...currentState, currentValue: value };
      }

      return { ...currentState, currentValue: `${currentState.currentValue}${value}` };
    });
  };

  const setOperator = (operator: Operator) => {
    setState((currentState) => {
      if (currentState.currentValue === "" || currentState.currentValue === "Error") {
        return currentState;
      }

      return {
        previousValue: currentState.currentValue,
        currentValue: "0",
        selectedOperator: operator,
      };
    });
  };

  const calculateResult = () => {
    setState((currentState) => {
      const { previousValue, selectedOperator, currentValue } = currentState;
      if (!previousValue || !selectedOperator || currentValue === "" || currentValue === "Error") {
        return currentState;
      }

      const calculatedValue = calculateOperation(previousValue, currentValue, selectedOperator);
      if (calculatedValue === "Error") {
        return {
          previousValue: "",
          currentValue: "Error",
          selectedOperator: "",
        };
      }

      return {
        previousValue: "",
        currentValue: calculatedValue,
        selectedOperator: "",
      };
    });
  };

  return {
    currentValue: state.currentValue,
    clearCurrentValue,
    deleteLastDigit,
    appendDigit,
    setOperator,
    calculateResult,
  };
}
