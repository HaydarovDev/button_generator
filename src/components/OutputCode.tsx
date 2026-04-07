import { useRef } from "react";
import type { ComputedButtonStyles } from "../types/styles";

export type OutputCodeProps = ComputedButtonStyles;

export default function OutputCode(styles: Readonly<OutputCodeProps>) {
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent || "");
    }
  };

  const styleOutput = `.modern-btn {
  display: inline-block;
  padding: ${styles.paddingBlock || "8px"} ${styles.paddingInline || "15px"};
  font-size: ${styles.fontSize || "16px"};
  font-weight: 600;
  color: ${styles.color || "#ffffff"};
  background: ${styles.backgroundColor || "#4f46e5"};
  border: ${styles.borderWidth || "0px"} ${styles.borderStyle || "solid"} ${styles.borderColor || "#fff"};
  border-radius: ${styles.borderRadius || "10px"};
  opacity: ${styles.opacity};
  box-shadow: ${styles.boxShadow || "0px 4px 14px rgba(79,70,229,0.5)"};
  cursor: ${styles.cursor || "default"};
}

.modern-btn:hover {
  transform: translateY(-2px);
  box-shadow: ${styles.boxShadow || "0px 4px 14px rgba(79,70,229,0.5)"};
}

.modern-btn:active {
  transform: translateY(0);
}`;

  return (
    <article className="border rounded w-full overflow-x-scroll p-2 m-2 relative sm:w-150 sm:overflow-auto">
      <button
        className="border rounded py-1 px-3 border-white text-white absolute right-2"
        onClick={handleCopy}
      >
        Copy
      </button>
      <pre className="text-white" ref={codeRef}>
        {styleOutput}
      </pre>
    </article>
  );
}
