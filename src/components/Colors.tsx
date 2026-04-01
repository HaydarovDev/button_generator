import type { ContentProps } from "../types/props";
import Input from "./Input";

export default function Colors({ styles, setStyles }: ContentProps) {
  return (
    <>
      <p>text color</p>
      <Input
        type="color"
        defaultValue="#fff"
        onChange={(textClr) =>
          setStyles({ ...styles, textClr: textClr.target.value })
        }
      />
      <Input
        type="color"
        defaultValue={"#fff"}
        onChange={(bg) =>
          setStyles({ ...styles, backgroundColor: bg.target.value })
        }
      />
    </>
  );
}
