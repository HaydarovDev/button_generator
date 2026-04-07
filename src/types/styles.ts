import type { Dispatch, SetStateAction } from "react";
import type { BorderStyle, Cursor } from "./button";

export type BorderStyles = {
  borderWidth: number;
  borderRadius: number;
  borderStyle: BorderStyle;
  borderColor: string;
};

export type ColorStyles = {
  textColor: string;
  backgroundColor: string;
};

export type ShadowStyles = {
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowBlur: number;
  shadowColor: string;
  shadowOpacity: number;
};

export type ContentStyles = {
  fontSize: number;
  paddingInline: number;
  paddingBlock: number;
  cursorPointer: boolean;
  opacity: number;
};

export type ComputedButtonStyles = {
  fontSize: string;
  paddingInline: string;
  paddingBlock: string;
  cursor: Cursor;
  opacity: number;
  borderWidth: string;
  borderRadius: string;
  borderStyle: BorderStyle;
  borderColor: string;
  color: string;
  backgroundColor: string;
  boxShadow: string;
};

export type StateTuple<T> = [T, Dispatch<SetStateAction<T>>];

export type UseStylesReturn = {
  border: StateTuple<BorderStyles>;
  colors: StateTuple<ColorStyles>;
  shadow: StateTuple<ShadowStyles>;
  content: StateTuple<ContentStyles>;
  computedStyles: ComputedButtonStyles;
};
