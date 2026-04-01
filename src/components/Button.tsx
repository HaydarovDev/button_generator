import type { border, Content, shadowBtn } from "../types/button";

export default function Button(styles: border & shadowBtn & Content) {
  const {
    fSize,
    borderW,
    borderStyle,
    borderColor,
    borderRadius,
    paddingBlock,
    paddingInline,
    textClr,
    cursor,
    x,
    y,
    blur,
    background,
    opacity,
    backgroundColor,
  } = styles;
  return (
    <button
      style={{
        fontSize: `${fSize || 15}px`,
        border: `${borderW}px ${borderStyle || "solid"} ${borderColor || "white"}`,
        borderRadius: `${borderRadius || 10}px`,
        paddingBlock: `${paddingBlock || 8}px`,
        paddingInline: `${paddingInline || 15}px`,
        color: `${textClr || "white"}`,
        cursor: `${cursor ? "pointer" : "default"}`,
        boxShadow: `${x || 0}px ${y || 4}px ${blur || 14}px rgba(${background || "79,70,229"},${opacity || "0.5"})`,
        background: `${backgroundColor || "#4f46e5"}`,
      }}
    >
      Hello button
    </button>
  );
}
