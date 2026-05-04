import { useState } from "react";

export function useSimpleCalculator() {
  const [firstInputValue, setFirstInputValue] = useState<number>(0);
  const [secondInputValue, setSecondInputValue] = useState<number>(0);
  const [sumResult, setSumResult] = useState<number>(0);

  const calculateSum = () => {
    setSumResult(firstInputValue + secondInputValue);
  };

  const resetCalculator = () => {
    setSumResult(0);
    setFirstInputValue(0);
    setSecondInputValue(0);
  };

  return {
    firstInputValue,
    secondInputValue,
    sumResult,
    setFirstInputValue,
    setSecondInputValue,
    calculateSum,
    resetCalculator,
  };
}
