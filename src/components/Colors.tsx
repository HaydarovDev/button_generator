import type { ContentProps } from "../types/type";
import Input from "./Input";

export default function Colors({ values, setValues }: ContentProps) {
  return (
    <>
      <p>text color</p>
      <Input
        type="color"
        defaultValue="#fff"
        onChange={(textClr) =>
          setValues({ ...values, textClr: textClr.target.value })
        }
      />
      <Input
        type="color"
        defaultValue={"#fff"}
        onChange={(bg) =>
          setValues({ ...values, backgroundColor: bg.target.value })
        }
      />
    </>
  );
}
