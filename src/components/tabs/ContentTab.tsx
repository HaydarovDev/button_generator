import type { ContentStyles } from "../../types/styles";
import Control from "../ui/Control";

export type ContentTabProps = {
  content: [ContentStyles, React.Dispatch<React.SetStateAction<ContentStyles>>];
}

export default function ContentTab({ content }: Readonly<ContentTabProps>) {
  const [contentState, setContent] = content;

  return (
    <>
      <Control
        label="Font Size"
        type="range"
        min={8}
        max={30}
        step={1}
        value={contentState.fontSize}
        onChange={(value) =>
          setContent({ ...contentState, fontSize: value as number })
        }
      />

      <Control
        label="Padding Inline"
        type="range"
        min={0}
        max={30}
        value={contentState.paddingInline}
        onChange={(value) =>
          setContent({ ...contentState, paddingInline: value as number })
        }
      />

      <Control
        label="Padding Block"
        type="range"
        min={0}
        max={30}
        value={contentState.paddingBlock}
        onChange={(value) =>
          setContent({ ...contentState, paddingBlock: value as number })
        }
      />

      <Control
        label="Pointer"
        type="checkbox"
        value={contentState.cursorPointer}
        onChange={(value) =>
          setContent({ ...contentState, cursorPointer: Boolean(value) })
        }
      />
    </>
  );
}
