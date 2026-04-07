import type { BorderStyle } from "../../types/button";

export type SelectProps = {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: BorderStyle[];
};

export default function Select({ onChange, className, options }: Readonly<SelectProps>) {

  return (
    <select
      onChange={onChange}
      className={`border p-1 rounded ${className || ""}`}
    >
      {options.map((style: string) => (
        <option key={style} value={style} className="text-black">
          {style}
        </option>
      ))}
    </select>
  );
}
