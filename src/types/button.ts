export type styleType = string[];

export type shadowBtn = {
  x: number;
  y: number;
  blur: number;
  background: string;
  opacity: string;
};

export type BorderStyle = "none" | "solid" | "dashed" | "dotted";

export type Content = {
  paddingInline: number;
  paddingBlock: number;
  textClr: string;
  backgroundColor: string;
  cursor: boolean;
  fSize: number;
};

export type border = {
  borderW: number;
  borderRadius: number;
  borderStyle: BorderStyle;
  borderColor: string;
};

export type inputType = { type: string; min?: string };
