import { useState } from "react";
import type { activePage, borderStyle, objectType } from "../types/type";

export default function Button() {
  const [active, setActive] = useState<activePage>("content");

  const [values, setValues] = useState<objectType>({
    fSize: "",
    borderW: "",
    borderRadius: "",
    borderStyle: "",
    paddingInline: "",
    paddingBlock: "",
    borderColor: "",
    textClr: "",
    cursor: false,
  });

  console.log(active);

  return (
    <section
      className="flex items-center
    flex-col"
    >
      <header className="flex w-75 justify-between my-2">
        <button
          onClick={() => setActive("content")}
          className="p-1 m-1 border border-white text-white cursor-pointer rounded"
        >
          content
        </button>
        <button
          onClick={() => setActive("border")}
          className="p-1 m-1 border border-white text-white cursor-pointer rounded"
        >
          border
        </button>
        <button
          onClick={() => setActive("colors")}
          className="p-1 m-1 border border-white text-white cursor-pointer rounded"
        >
          colors
        </button>
        <button
          onClick={() => setActive("shadow")}
          className="p-1 m-1 border border-white text-white cursor-pointer rounded"
        >
          shadow
        </button>
      </header>

      <article className="w-75 m-auto text-white flex flex-col gap-2">
        {active === "content" ? (
          <>
            <p>Content</p>
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
            <p>Padding (vertical and horizontal)</p>
            <input
              type="range"
              min={0}
              max={15}
              defaultValue={4}
              onChange={(inline) =>
                setValues({ ...values, paddingInline: inline.target.value })
              }
            />
            <input
              type="range"
              min={0}
              max={15}
              defaultValue={4}
              onChange={(block) =>
                setValues({ ...values, paddingBlock: block.target.value })
              }
            />
            <label
              htmlFor="pointer"
              className="flex items-center justify-center"
            >
              Pointer
              <input
                type="checkbox"
                id="pointer"
                onChange={(cursor) =>
                  setValues({ ...values, cursor: cursor.target.checked })
                }
              />
            </label>
          </>
        ) : (
          ""
        )}

        {active === "border" ? (
          <>
            <p>Border</p>
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
                setValues({ ...values, borderRadius: size.target.value })
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
              <option className="text-black" value="solid">
                Solid
              </option>
              <option className="text-black" value="dotted">
                Dotted
              </option>
              <option className="text-black" value="dashed">
                Dashed
              </option>
              <option className="text-black" value="none">
                none
              </option>
            </select>
            <p>border color</p>
            <input
              type="color"
              defaultValue={"#fff"}
              onChange={(borderClr) =>
                setValues({ ...values, borderColor: borderClr.target.value })
              }
            />
          </>
        ) : (
          ""
        )}

        {active === "colors" ? (
          <>
            <p>text color</p>
            <input
              type="color"
              defaultValue={"#fff"}
              onChange={(textClr) =>
                setValues({ ...values, textClr: textClr.target.value })
              }
            />
          </>
        ) : (
          ""
        )}

        {active === "shadow" ? (
          <>
            <p>Shadow color</p>
            <input
              type="range"
              defaultValue={"#fff"}
              onChange={(textClr) =>
                setValues({ ...values, textClr: textClr.target.value })
              }
            />
            <p>Shadow color</p>
            <input
              type="range"
              defaultValue={"#fff"}
              onChange={(textClr) =>
                setValues({ ...values, textClr: textClr.target.value })
              }
            />
            <p>Shadow color</p>
            <input
              type="range"
              defaultValue={"#fff"}
              onChange={(textClr) =>
                setValues({ ...values, textClr: textClr.target.value })
              }
            />
            <p>Shadow color</p>
            <input
              type="range"
              defaultValue={"#fff"}
              onChange={(textClr) =>
                setValues({ ...values, textClr: textClr.target.value })
              }
            />
            <p>Shadow color</p>
            <input
              type="color"
              defaultValue={"#fff"}
              onChange={(textClr) =>
                setValues({ ...values, textClr: textClr.target.value })
              }
            />
          </>
        ) : (
          ""
        )}
      </article>

      <button
        style={{
          fontSize: `${values.fSize || 15}px`,
          border: `${values.borderW || 1}px ${values.borderStyle || "solid"} ${values.borderColor || "white"}`,
          borderRadius: `${values.borderRadius || 3}px`,
          paddingBlock: `${values.paddingBlock || 4}px`,
          paddingInline: `${values.paddingInline || 4}px`,
          color: `${values.textClr || "white"}`,
          cursor: `${values.cursor ? "pointer" : "default"}`,
        }}
      >
        Hello button
      </button>
    </section>
  );
}
