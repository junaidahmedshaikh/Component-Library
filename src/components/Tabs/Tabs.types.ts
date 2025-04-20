import { ReactNode } from "react";

export interface Tab {
  label: string;
  content: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}
