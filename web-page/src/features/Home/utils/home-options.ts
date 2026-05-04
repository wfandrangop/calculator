import type { HomeOption } from "../types/home-option";

export const HOME_OPTIONS: HomeOption[] = [
  {
    label: "Basic Calculator",
    page: "simpleCalculator",
    variant: "primary",
  },
  {
    label: "Complete Calculator",
    page: "completeCalculator",
    variant: "secondary",
  },
  {
    label: "Rick and Morty API",
    page: "characterExplorer",
    variant: "outline-primary",
  },
];
