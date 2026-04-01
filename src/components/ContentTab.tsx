import type { ContentProps } from "../types/props";
import Input from "./Input";

export default function ContentTab({ styles, setStyles }: ContentProps) {
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
          setStyles({ ...styles, fSize: Number(size.target.value) })
        }
      />
      <p>Padding (vertical and horizontal)</p>

      <Input
        type="range"
        min={0}
        max={30}
        defaultValue={15}
        onChange={(inline) =>
          setStyles({
            ...styles,
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
          setStyles({
            ...styles,
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
            setStyles({ ...styles, cursor: cursor.target.checked })
          }
        />
      </label>
    </>
  );
}
