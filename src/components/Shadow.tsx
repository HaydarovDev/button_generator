import Input from "./Input";
import type { ContentProps } from "../types/type";

export default function Shadow({ values, setValues }: ContentProps) {
  return (
    <>
      <p>Offset X</p>
      <Input
        type="range"
        min={-30}
        max={30}
        defaultValue={0}
        onChange={(offsetX) =>
          setValues({ ...values, x: Number(offsetX.target.value) })
        }
      />
      <p>Offset Y</p>
      <Input
        type="range"
        min={-30}
        max={30}
        defaultValue={4}
        onChange={(offsetY) =>
          setValues({ ...values, y: Number(offsetY.target.value) })
        }
      />
      <p>Blur Radius</p>
      <Input
        type="range"
        min={0}
        max={1}
        step={0.1}
        defaultValue={0.4}
        onChange={(shadowOpac) =>
          setValues({ ...values, opacity: shadowOpac.target.value })
        }
      />
      <p>Shadow Opacity</p>
      <Input
        type="range"
        defaultValue={14}
        onChange={(shadowBlur) =>
          setValues({
            ...values,
            blur: Number(shadowBlur.target.value),
          })
        }
      />
      <p>Shadow color</p>
      <Input
        type="color"
        defaultValue={"rgba(79,70,229,0.4)"}
        onChange={(shadowClr) =>
          setValues({ ...values, background: shadowClr.target.value })
        }
      />
    </>
  );
}
