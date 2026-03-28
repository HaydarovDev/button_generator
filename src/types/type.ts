export type borderStyle = "solid" | "dashed" | "dotted" | "";

export type objectType = {
  fSize: string;
  borderW: string;
  borderRadius: string;
  borderStyle: borderStyle;
  paddingInline: string;
  paddingBlock: string;
  borderColor: string;
  textClr: string;
  bgClr: string;
  cursor: boolean;
  offsetX: string;
  offsetY: string;
  shadowBlur: string;
  shadowClr: string;
  shadowOpac: string;
};

export type activePage = "content" | "colors" | "border" | "shadow";
