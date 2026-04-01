import Input from "./Input";
import type { ContentProps } from "../types/props";

export default function Shadow({ styles, setStyles }: ContentProps) {
  return (
    <>
      <p>Offset X</p>
      <Input
        type="range"
        min={-30}
        max={30}
        defaultValue={0}
        onChange={(offsetX) =>
          setStyles({ ...styles, x: Number(offsetX.target.value) })
        }
      />
      <p>Offset Y</p>
      <Input
        type="range"
        min={-30}
        max={30}
        defaultValue={4}
        onChange={(offsetY) =>
          setStyles({ ...styles, y: Number(offsetY.target.value) })
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
          setStyles({ ...styles, opacity: shadowOpac.target.value })
        }
      />
      <p>Shadow Opacity</p>
      <Input
        type="range"
        defaultValue={14}
        onChange={(shadowBlur) =>
          setStyles({
            ...styles,
            blur: Number(shadowBlur.target.value),
          })
        }
      />
      <p>Shadow color</p>
      <Input
        type="color"
        defaultValue={"rgba(79,70,229,0.4)"}
        onChange={(shadowClr) =>
          setStyles({ ...styles, background: shadowClr.target.value })
        }
      />
    </>
  );
}
