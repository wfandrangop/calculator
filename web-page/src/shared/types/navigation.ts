export type AppPage = "home" | "simpleCalculator" | "completeCalculator" | "characterExplorer";

export type NavigateToAppPage = (page: AppPage) => void;
