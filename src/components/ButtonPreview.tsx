import type { ComputedButtonStyles } from "../types/styles";

export default function ButtonPreview({
  fontSize,
  paddingInline,
  paddingBlock,
  cursor,
  borderWidth,
  borderRadius,
  borderStyle,
  borderColor,
  color,
  backgroundColor,
  boxShadow,
}: Readonly<ComputedButtonStyles>) {
  return (
    <button
      style={{
        fontSize: fontSize ?? "15px",
        paddingBlock: paddingBlock ?? "8px",
        paddingInline: paddingInline ?? "15px",
        border: `${borderWidth ?? "0px"} ${borderStyle ?? "solid"} ${borderColor ?? "white"}`,
        borderRadius: borderRadius ?? "10px",
        color: color ?? "white",
        background: backgroundColor ?? "#4f46e5",
        cursor: cursor ?? "default",
        boxShadow: boxShadow ?? "0px 4px 14px rgba(79,70,229,0.5)",
      }}
    >
      Hello button
    </button>
  );
}
