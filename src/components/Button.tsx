import { useRef, useState } from "react";
import type { activePage, borderStyle, objectType } from "../types/type";

export default function Button() {
  const [active, setActive] = useState<activePage>("content");
  const code = useRef<HTMLPreElement>(null);

  const [values, setValues] = useState<objectType>({
    fSize: "",
    borderW: "",
    borderRadius: "",
    borderStyle: "",
    paddingInline: "",
    paddingBlock: "",
    borderColor: "",
    textClr: "",
    bgClr: "",
    cursor: false,
    offsetX: "",
    offsetY: "",
    shadowBlur: "",
    shadowClr: "",
    shadowOpac: "",
  });

  const handleCopy = () => {
    if (code.current) {
      navigator.clipboard.writeText(code.current.textContent || "");
    }
  };

  const {
    paddingBlock,
    paddingInline,
    fSize,
    textClr,
    bgClr,
    borderW,
    borderStyle,
    borderColor,
    borderRadius,
    offsetY,
    offsetX,
    shadowBlur,
    shadowClr,
    shadowOpac,
    cursor,
  } = values;

  const styles = `.modern-btn {
  display: inline-block;
  padding: ${paddingBlock || 8}px ${paddingInline || 15}px;
  font-size: ${fSize || 16}px;
  font-weight: 600;
  color: ${textClr || "#ffffff"};
  background: ${bgClr || "#4f46e5"};
  border: ${borderW || 0}px ${borderStyle || "none"} ${borderColor || "transparent"};
  border-radius: ${borderRadius || 10}px;
  box-shadow: ${offsetY || 0}px ${offsetX || 4}px ${shadowBlur || 14}px rgba(${shadowClr || "79,70,229"},${shadowOpac || "0.5"});
  cursor: ${cursor ? "pointer" : "default"};
}`;

  return (
    <section
      className="flex items-center
    flex-col"
    >
      <header className="flex w-75 justify-between my-2">
        <button
          onClick={() => setActive("content")}
          className={`p-1 m-1 border text-white cursor-pointer rounded ${active == "content" ? "border-red-700" : "border-white"}`}
        >
          content
        </button>
        <button
          onClick={() => setActive("border")}
          className={`p-1 m-1 border text-white cursor-pointer rounded ${active == "border" ? "border-red-700" : "border-white"}`}
        >
          border
        </button>
        <button
          onClick={() => setActive("colors")}
          className={`p-1 m-1 border text-white cursor-pointer rounded ${active == "colors" ? "border-red-700" : "border-white"}`}
        >
          colors
        </button>
        <button
          onClick={() => setActive("shadow")}
          className={`p-1 m-1 border text-white cursor-pointer rounded ${active == "shadow" ? "border-red-700" : "border-white"}`}
        >
          shadow
        </button>
      </header>

      <article className="w-75 m-auto text-white flex flex-col gap-2">
        {active === "content" ? (
          <>
            <p>Font size</p>
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
              max={30}
              defaultValue={15}
              onChange={(inline) =>
                setValues({ ...values, paddingInline: inline.target.value })
              }
            />
            <input
              type="range"
              min={0}
              max={30}
              defaultValue={8}
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
              defaultValue={0}
              onChange={(size) =>
                setValues({ ...values, borderW: size.target.value })
              }
            />
            <input
              type="range"
              defaultValue={10}
              min={0}
              max={15}
              onChange={(size) =>
                setValues({ ...values, borderRadius: size.target.value })
              }
            />
            <select
              className="border"
              defaultValue={"none"}
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
            <input
              type="color"
              defaultValue={"#4f46e5"}
              onChange={(bg) =>
                setValues({ ...values, bgClr: bg.target.value })
              }
            />
          </>
        ) : (
          ""
        )}

        {active === "shadow" ? (
          <>
            <p>Offset X</p>
            <input
              type="range"
              min={-30}
              max={30}
              defaultValue={0}
              onChange={(offsetX) =>
                setValues({ ...values, offsetX: offsetX.target.value })
              }
            />
            <p>Offset Y</p>
            <input
              type="range"
              min={-30}
              max={30}
              defaultValue={4}
              onChange={(offsetY) =>
                setValues({ ...values, offsetY: offsetY.target.value })
              }
            />
            <p>Blur Radius</p>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              defaultValue={0.4}
              onChange={(shadowOpac) =>
                setValues({ ...values, shadowOpac: shadowOpac.target.value })
              }
            />
            <p>Shadow Opacity</p>
            <input
              type="range"
              defaultValue={14}
              onChange={(shadowBlur) =>
                setValues({ ...values, shadowBlur: shadowBlur.target.value })
              }
            />
            <p>Shadow color</p>
            <input
              type="color"
              defaultValue={"rgba(79,70,229,0.4)"}
              onChange={(shadowClr) =>
                setValues({ ...values, shadowClr: shadowClr.target.value })
              }
            />
          </>
        ) : (
          ""
        )}
      </article>

      <article className="border rounded w-150 p-2 m-2 relative">
        <button
          className="border rounded py-1 px-3 border-white text-white absolute right-2"
          onClick={() => handleCopy()}
        >
          Copy
        </button>
        <pre className="text-white" ref={code}>
          {styles}
        </pre>
      </article>

      <button
        style={{
          fontSize: `${values.fSize || 15}px`,
          border: `${values.borderW}px ${values.borderStyle || "solid"} ${values.borderColor || "white"}`,
          borderRadius: `${values.borderRadius || 10}px`,
          paddingBlock: `${values.paddingBlock || 8}px`,
          paddingInline: `${values.paddingInline || 15}px`,
          color: `${values.textClr || "white"}`,
          cursor: `${values.cursor ? "pointer" : "default"}`,
          boxShadow: `${values.offsetX || 0}px ${values.offsetY || 4}px ${values.shadowBlur || 14}px rgba(${values.shadowClr || "79,70,229"},${values.shadowOpac || "0.5"})`,
          background: `${values.bgClr || "#4f46e5"}`,
        }}
      >
        Hello button
      </button>
    </section>
  );
}
