type inpType = "range" | "color" | "text" | "checkbox";

export type inputType = {
  id?: string;
  type: inpType;
  min?: number;
  max?: number;
  defaultValue?: number | string;
  step?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
