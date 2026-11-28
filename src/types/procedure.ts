import { JSX } from "react/jsx-runtime";
import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react-native"

export type Procedure = {
  id: string;
  title: string;
  icon: ComponentType|LucideIcon;
  category: string;
  cost: string;
  duration: string;
  location: string;
  requirements: string[];
  steps: string[];
  sources: string[];
  verifiedAt: string;
  version: string;
};
