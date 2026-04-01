import type React from "react";
import type { BorderStyle } from "./button";

export type SelectProps = {
  defaultValue: BorderStyle;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
};
