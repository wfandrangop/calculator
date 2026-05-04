import type { Operator } from "../types/complete-calculator";

export function calculateOperation(
  firstOperand: string,
  secondOperand: string,
  operator: Operator,
): string {
  const firstValue = parseFloat(firstOperand);
  const secondValue = parseFloat(secondOperand);

  switch (operator) {
    case "+":
      return (firstValue + secondValue).toString();
    case "-":
      return (firstValue - secondValue).toString();
    case "x":
      return (firstValue * secondValue).toString();
    case "/":
      if (secondValue === 0) {
        return "Error";
      }
      return (firstValue / secondValue).toString();
    default:
      return "Error";
  }
}
