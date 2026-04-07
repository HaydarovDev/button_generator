import { useState } from "react";
import { hexToRgba } from "../utils/color";
import type {
  BorderStyles,
  ComputedButtonStyles,
  ColorStyles,
  ContentStyles,
  ShadowStyles,
  UseStylesReturn,
} from "../types/styles";

export default function useStyles(): UseStylesReturn {
  const [border, setBorder] = useState<BorderStyles>({
    borderWidth: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#ffffff",
  });

  const [colors, setColors] = useState<ColorStyles>({
    textColor: "#ffffff",
    backgroundColor: "#4f46e5",
  });

  const [shadow, setShadow] = useState<ShadowStyles>({
    shadowOffsetX: 0,
    shadowOffsetY: 4,
    shadowBlur: 14,
    shadowColor: "#4f46e5",
    shadowOpacity: 0.5,
  });

  const shadowColor = hexToRgba(shadow.shadowColor || "#000000", shadow.shadowOpacity);

  const [content, setContent] = useState<ContentStyles>({
    fontSize: 15,
    paddingInline: 15,
    paddingBlock: 8,
    cursorPointer: false,
    opacity: 1,
  });

  const computedStyles: ComputedButtonStyles = {
    fontSize: `${content.fontSize}px`,
    paddingInline: `${content.paddingInline}px`,
    paddingBlock: `${content.paddingBlock}px`,
    cursor: content.cursorPointer ? "pointer" : "default",
    opacity: content.opacity,

    borderWidth: `${border.borderWidth}px`,
    borderRadius: `${border.borderRadius}px`,
    borderStyle: border.borderStyle,
    borderColor: border.borderColor,

    color: colors.textColor,
    backgroundColor: colors.backgroundColor,

    boxShadow: `${shadow.shadowOffsetX}px ${shadow.shadowOffsetY}px ${shadow.shadowBlur}px ${shadowColor}`,
  };

  return {
    border: [border, setBorder],
    colors: [colors, setColors],
    shadow: [shadow, setShadow],
    content: [content, setContent],
    computedStyles,
  };
}
