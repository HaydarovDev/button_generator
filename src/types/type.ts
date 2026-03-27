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
  cursor: boolean;
};

export type activePage = "content" | "colors" | "border" | "shadow";
