import type { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  rounded?: Roundness;
  full?: boolean;
  positionText?: Position;
  sizeButton?: Size;
};

type Color = "primary";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "none";

type Position =
  | `${"top" | "bottom"}-${"left" | "center" | "right"}`
  | `center${"" | "-left" | "-right"}`;

type Roundness = "start" | "middle" | "end" | "normal" | "rounded";

export type { Color, Size, Position, ButtonProps, Roundness };
