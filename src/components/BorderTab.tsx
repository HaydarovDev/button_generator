import type { BorderStyle } from "../types/button";
import type { ContentProps } from "../types/props";
import Input from "./Input";
import Select from "./Select";

export default function BorderTab({ styles, setStyles }: ContentProps) {
  return (
    <>
      <p>Border</p>
      <Input
        type="range"
        min={0}
        max={10}
        defaultValue={0}
        onChange={(size) =>
          setStyles({ ...styles, borderW: Number(size.target.value) })
        }
      />
      <Input
        type="range"
        min={0}
        max={15}
        // defaultValue={10}
        onChange={(size) =>
          setStyles({
            ...styles,
            borderRadius: Number(size.target.value),
          })
        }
      />
      <Select
        className="border"
        defaultValue="solid"
        onChange={(e) =>
          setStyles({
            ...styles,
            borderStyle: e.target.value as BorderStyle,
          })
        }
      ></Select>
      <p>border color</p>
      <Input
        type="color"
        defaultValue={"#fff"}
        onChange={(borderClr) =>
          setStyles({ ...styles, borderColor: borderClr.target.value })
        }
      />
    </>
  );
}
