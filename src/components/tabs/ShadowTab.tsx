import type { ShadowStyles } from "../../types/styles";
import Control from "../ui/Control";

export type ShadowTabProps = {
  shadow: [ShadowStyles, React.Dispatch<React.SetStateAction<ShadowStyles>>];
}

export default function ShadowTab({
  shadow,
}: Readonly<ShadowTabProps>) {
  const [shadowState, setShadow] = shadow;

  return (
    <>
      <Control
        label="Offset X"
        min={-30}
        max={30}
        value={shadowState.shadowOffsetX}
        onChange={(value) =>
          setShadow({ ...shadowState, shadowOffsetX: value as number })
        }
      />

      <Control
        label="Offset Y"
        min={-30}
        max={30}
        value={shadowState.shadowOffsetY}
        onChange={(value) =>
          setShadow({ ...shadowState, shadowOffsetY: value as number })
        }
      />

      <Control
        label="Blur Radius"
        min={0}
        max={30}
        value={shadowState.shadowBlur}
        onChange={(value) =>
          setShadow({ ...shadowState, shadowBlur: value as number })
        }
      />

      <Control
        label="Shadow Opacity"
        min={0}
        max={1}
        step={0.05}
        value={shadowState.shadowOpacity}
        onChange={(value) =>
          setShadow({ ...shadowState, shadowOpacity: value as number })
        }
      />

      <Control
        label="Shadow Color"
        type="color"
        value={shadowState.shadowColor}
        onChange={(value) =>
          setShadow({ ...shadowState, shadowColor: value as string })
        }
      />
    </>
  );
}
