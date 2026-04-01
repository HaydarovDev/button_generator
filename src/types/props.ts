import type { border, Content, shadowBtn } from "./button";

export type ContentProps = {
  styles: border & shadowBtn & Content;
  setStyles: React.Dispatch<React.SetStateAction<border & shadowBtn & Content>>;
};

