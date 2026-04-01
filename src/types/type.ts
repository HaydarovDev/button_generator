import type { border, Content, shadowBtn } from "./button";

export type ContentProps = {
  values: border & shadowBtn & Content;
  setValues: React.Dispatch<React.SetStateAction<border & shadowBtn & Content>>;
};
