import type { AppPage } from "@/shared/types/navigation";

export type HomeButtonVariant =
  | "primary"
  | "secondary"
  | "outline-primary";

export interface HomeOption {
  label: string;
  page: AppPage;
  variant: HomeButtonVariant;
}
