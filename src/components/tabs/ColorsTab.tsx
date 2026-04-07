import type { ColorStyles } from "../../types/styles";
import Control from "../ui/Control";

export type ColorsTabProps = {
  colors: [ColorStyles, React.Dispatch<React.SetStateAction<ColorStyles>>];
};

export default function ColorsTab({
  colors,
}: Readonly<ColorsTabProps>) {
  const [colorState, setColors] = colors;

  return (
    <>
      <Control
        label="Text Color"
        type="color"
        value={colorState.textColor}
        onChange={(value) =>
          setColors({ ...colorState, textColor: value as string })
        }
      />

      <Control
        label="Background Color"
        type="color"
        value={colorState.backgroundColor}
        onChange={(value) =>
          setColors({ ...colorState, backgroundColor: value as string })
        }
      />
    </>
  );
}
