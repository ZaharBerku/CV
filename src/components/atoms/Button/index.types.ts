import type { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  rounded?: Roundness;
  full?: boolean;
  positionText?: Position;
  sizeButton?: Size;
};

export type Color = "primary";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "none";

export type Position =
  | `${"top" | "bottom"}-${"left" | "center" | "right"}`
  | `center${"" | "-left" | "-right"}`;

export type Roundness = "start" | "middle" | "end" | "normal" | "rounded";
