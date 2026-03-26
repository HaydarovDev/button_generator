import { useState } from "react";
import type { borderStyle, objectType } from "./types/type";

export default function App() {
  const [values, setValues] = useState<objectType>({
    fSize: "",
    borderW: "",
    borderRadiusLeft: "",
    borderRadiusRight: "",
    borderRadiusTop: "",
    borderRadiusBottom: "",
    borderStyle: "",
    paddingInline: "",
    paddingBlock: "",
    borderColor: "",
    textClr: "",
    cursor: false,
  });
  console.log(values.borderW);

  return (
    <>
      <article className="flex flex-col items-center">
        border style
        <input
          type="range"
          min={8}
          max={30}
          defaultValue={15}
          step={2}
          onChange={(size) =>
            setValues({ ...values, fSize: size.target.value })
          }
        />
        <input
          type="range"
          min={1}
          max={10}
          defaultValue={3}
          onChange={(size) =>
            setValues({ ...values, borderW: size.target.value })
          }
        />
        <input
          type="range"
          defaultValue={3}
          min={0}
          max={15}
          onChange={(size) =>
            setValues({ ...values, borderRadiusLeft: size.target.value })
          }
        />
        <input
          type="range"
          min={0}
          max={15}
          defaultValue={3}
          onChange={(size) =>
            setValues({ ...values, borderRadiusRight: size.target.value })
          }
        />
        <input
          type="range"
          min={0}
          max={15}
          defaultValue={3}
          onChange={(size) =>
            setValues({ ...values, borderRadiusTop: size.target.value })
          }
        />
        <input
          type="range"
          min={0}
          max={15}
          defaultValue={3}
          onChange={(size) =>
            setValues({ ...values, borderRadiusBottom: size.target.value })
          }
        />
        <select
          className="border"
          onChange={(style) =>
            setValues({
              ...values,
              borderStyle: style.target.value as borderStyle,
            })
          }
        >
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="none">none</option>
        </select>
        padding
        <input
          type="range"
          min={0}
          max={15}
          defaultValue={0}
          onChange={(inline) =>
            setValues({ ...values, paddingInline: inline.target.value })
          }
        />
        <input
          type="range"
          min={0}
          max={15}
          defaultValue={0}
          onChange={(block) =>
            setValues({ ...values, paddingBlock: block.target.value })
          }
        />
        <input
          type="color"
          onChange={(borderClr) =>
            setValues({ ...values, borderColor: borderClr.target.value })
          }
        />
        <p>text color</p>
        <input
          type="color"
          onChange={(textClr) =>
            setValues({ ...values, textClr: textClr.target.value })
          }
        />
        <label htmlFor="pointer">
          Pointer
          <input
            type="checkbox"
            id="pointer"
            onChange={(cursor) =>
              setValues({ ...values, cursor: cursor.target.checked })
            }
          />
        </label>
      </article>

      <button
        style={{
          fontSize: `${values.fSize || 15}px`,
          border: `${values.borderW || 1}px ${values.borderStyle || "solid"} ${values.borderColor || "white"}`,
          borderTopLeftRadius: `${values.borderRadiusLeft || 3}px`,
          borderTopRightRadius: `${values.borderRadiusRight || 3}px`,
          borderBottomRightRadius: `${values.borderRadiusTop || 3}px`,
          borderBottomLeftRadius: `${values.borderRadiusBottom || 3}px`,
          paddingBlock: `${values.paddingBlock}px`,
          paddingInline: `${values.paddingInline}px`,
          color: `${values.textClr || "white"}`,
          cursor: `${values.cursor ? "pointer" : "default"}`,
        }}
      >
        Hello button
      </button>
    </>
  );
}
