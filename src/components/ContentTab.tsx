import type { ContentProps } from "../types/type";
import Input from "./Input";

export default function ContentTab({ values, setValues }: ContentProps) {
  return (
    <>
      <p>Font size</p>
      <Input
        type="range"
        min={8}
        max={30}
        defaultValue={15}
        step={2}
        onChange={(size) =>
          setValues({ ...values, fSize: Number(size.target.value) })
        }
      />
      <p>Padding (vertical and horizontal)</p>

      <Input
        type="range"
        min={0}
        max={30}
        defaultValue={15}
        onChange={(inline) =>
          setValues({
            ...values,
            paddingInline: Number(inline.target.value),
          })
        }
      />
      <Input
        type="range"
        min={0}
        max={30}
        defaultValue={8}
        onChange={(block) =>
          setValues({
            ...values,
            paddingBlock: Number(block.target.value),
          })
        }
      />
      <label htmlFor="pointer" className="flex items-center justify-center">
        Pointer
        <Input
          type="checkbox"
          id="pointer"
          onChange={(cursor) =>
            setValues({ ...values, cursor: cursor.target.checked })
          }
        />
      </label>
    </>
  );
}
