type ControlProps = {
  label: string;
  type?: "range" | "color" | "checkbox";
  min?: number;
  max?: number;
  step?: number;
  value: number | string | boolean;
  onChange: (value: number | string | boolean) => void;
};

export default function Control({
  label,
  type = "range",
  min,
  max,
  step,
  value,
  onChange,
}: Readonly<ControlProps>) {
  return (
    <div className="w-full">
      <p>{label}</p>
      <input
        className="w-full"
        type={type}
        min={min}
        max={max}
        step={step}
        value={type === "checkbox" ? undefined : String(value)}
        checked={type === "checkbox" ? Boolean(value) : undefined}
        onChange={(e) => {
          let nextValue: number | string | boolean;

          if (type === "range") {
            nextValue = Number(e.target.value);
          } else if (type === "checkbox") {
            nextValue = e.target.checked;
          } else {
            nextValue = e.target.value;
          }

          onChange(nextValue);
        }}
      />
    </div>
  );
}
