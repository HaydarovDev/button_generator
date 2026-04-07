export type CSSValue = number | string;

export type Cursor =
  | "pointer"
  | "default"
  | "not-allowed"
  | "grab"
  | "text";

export type BorderStyle = "none" | "solid" | "dashed" | "dotted";

export type Border = {
  borderWidth: CSSValue;
  borderRadius: CSSValue;
  borderStyle: BorderStyle;
  borderColor: string;
};

export type Shadow = {
  shadowX: CSSValue;
  shadowY: CSSValue;
  shadowBlur: CSSValue;
  shadowColor: string;
  shadowOpacity: number;
};

export type Content = {
  paddingInline: CSSValue;
  paddingBlock: CSSValue;
  textColor: string;
  backgroundColor: string;
  cursor: Cursor;
  fontSize: CSSValue;
};

export type Styles = Border & Shadow & Content;
