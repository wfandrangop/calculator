export type Operator = "+" | "-" | "x" | "/";

export interface CompleteCalculatorState {
  previousValue: string;
  currentValue: string;
  selectedOperator: Operator | "";
}
