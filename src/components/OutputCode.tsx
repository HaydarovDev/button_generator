import { useRef } from "react";
import type { border, Content, shadowBtn } from "../types/button";

export default function OutputCode(styles: border & shadowBtn & Content) {
  const code = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (code.current) {
      navigator.clipboard.writeText(code.current.textContent || "");
    }
  };

  const {
    fSize,
    borderW,
    borderStyle,
    borderColor,
    borderRadius,
    paddingBlock,
    paddingInline,
    textClr,
    cursor,
    y,
    x,
    blur,
    background,
    opacity,
    backgroundColor,
  } = styles;

  const styleOutput = `.modern-btn {
  display: inline-block;
  padding: ${paddingBlock || 8}px ${paddingInline || 15}px;
  font-size: ${fSize || 16}px;
  font-weight: 600;
  color: ${textClr || "#ffffff"};
  background: ${backgroundColor || "#4f46e5"};
  border: ${borderW || 0}px ${borderStyle || "solid"} ${borderColor || "#fff"};
  border-radius: ${borderRadius || 10}px;
  box-shadow: ${y || 0}px ${x || 4}px ${blur || 14}px rgba(${background || "79,70,229"},${opacity || "0.5"});
  cursor: ${cursor ? "pointer" : "default"};
}
.modern-btn:hover {
  transform: translateY(-2px);
  box-shadow: ${y || 0}px ${x || 4}px ${blur || 14}px rgba(${background || "79,70,229"},${opacity || "0.5"});
}

.modern-btn:active {
  transform: translateY(0);
}`;

  return (
    <article className="border rounded w-full overflow-x-scroll p-2 m-2 relative sm:w-150 sm:overflow-auto">
      <button
        className="border rounded py-1 px-3 border-white text-white absolute right-2"
        onClick={() => handleCopy()}
      >
        Copy
      </button>
      <pre className="text-white" ref={code}>
        {styleOutput}
      </pre>
    </article>
  );
}
