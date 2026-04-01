import type { BorderStyle } from "../types/button";
import type { ContentProps } from "../types/type";
import Input from "./Input";
import Select from "./Select";

export default function BorderTab({ values, setValues }: ContentProps) {
  return (
    <>
      <p>Border</p>
      <Input
        type="range"
        min={0}
        max={10}
        defaultValue={0}
        onChange={(size) =>
          setValues({ ...values, borderW: Number(size.target.value) })
        }
      />
      <Input
        type="range"
        min={0}
        max={15}
        // defaultValue={10}
        onChange={(size) =>
          setValues({
            ...values,
            borderRadius: Number(size.target.value),
          })
        }
      />
      <Select
        className="border"
        defaultValue="solid"
        onChange={(e) =>
          setValues({
            ...values,
            borderStyle: e.target.value as BorderStyle,
          })
        }
      ></Select>
      <p>border color</p>
      <Input
        type="color"
        defaultValue={"#fff"}
        onChange={(borderClr) =>
          setValues({ ...values, borderColor: borderClr.target.value })
        }
      />
    </>
  );
}
