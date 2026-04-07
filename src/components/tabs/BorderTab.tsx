import { borderStyles } from "../../constants/border-styles";
import type { BorderStyle } from "../../types/button";
import type { BorderStyles } from "../../types/styles";
import Control from "../ui/Control";
import Select from "../ui/Select";

export type BorderTabProps = {
  border: [BorderStyles, React.Dispatch<React.SetStateAction<BorderStyles>>];
}

export default function BorderTab({
  border,
}: Readonly<BorderTabProps>) {
  const [borderState, setBorder] = border;

  return (
    <>
      <Control
        label="Border Width"
        type="range"
        min={0}
        max={10}
        value={borderState.borderWidth}
        onChange={(value) =>
          setBorder({ ...borderState, borderWidth: value as number })
        }
      />

      <Control
        label="Border Radius"
        type="range"
        min={0}
        max={15}
        value={borderState.borderRadius}
        onChange={(value) =>
          setBorder({ ...borderState, borderRadius: value as number })
        }
      />

      <p>Border Style</p>
      <Select
        options={borderStyles}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setBorder({ ...borderState, borderStyle: e.target.value as BorderStyle })
        }
      />

      <Control
        label="Border Color"
        type="color"
        value={borderState.borderColor}
        onChange={(value) =>
          setBorder({ ...borderState, borderColor: value as string })
        }
      />
    </>
  );
}
