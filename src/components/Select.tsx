import type { styleType } from "../types/button";
import type { SelectProps } from "../types/select";

export default function Select(props: SelectProps) {
  const borderStyle: styleType = ["solid", "dashed", "dotted", "none"];

  return (
    <select {...props}>
      {borderStyle.map((style) => (
        <option key={style} value={style} className="text-black">
          {style}
        </option>
      ))}
    </select>
  );
}
