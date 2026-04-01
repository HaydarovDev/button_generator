import { useState } from "react";
import Button from "./components/Button";
import type { tabMenu } from "./types/tab";
import OutputCode from "./components/OutputCode";
import ContentTab from "./components/ContentTab";
import BorderTab from "./components/BorderTab";
import Colors from "./components/Colors";
import Shadow from "./components/Shadow";
import type { Styles } from "./types/button";

export default function App() {
  const [active, setActive] = useState<tabMenu>("content");

  const [styles, setStyles] = useState<Styles>({
    fSize: 0,
    borderW: 0,
    borderRadius: 0,
    borderStyle: "none",
    paddingInline: 0,
    paddingBlock: 0,
    borderColor: "",
    textClr: "",
    backgroundColor: "",
    cursor: false,
    x: 0,
    y: 0,
    blur: 0,
    background: "",
    opacity: "",
  });

  return (
    <section
      className="w-full flex items-center justify-center
    "
    >
      <div className="flex items-center flex-col">
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
            <ContentTab styles={styles} setStyles={setStyles} />
          ) : (
            ""
          )}

          {active === "border" ? (
            <BorderTab styles={styles} setStyles={setStyles} />
          ) : (
            ""
          )}

          {active === "colors" ? (
            <Colors styles={styles} setStyles={setStyles} />
          ) : (
            ""
          )}

          {active === "shadow" ? (
            <Shadow styles={styles} setStyles={setStyles} />
          ) : (
            ""
          )}
        </article>
        <OutputCode {...styles} />
      </div>

      <Button {...styles} />
    </section>
  );
}
