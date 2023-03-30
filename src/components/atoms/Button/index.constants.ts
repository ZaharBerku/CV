import type { Color, Size, Position, Roundness } from "./index.types";

const colorClasses: Record<Color, string> = {
  "primary": "text-white bg-primary h-8 xs:h-9 md:h-3.4 m-1",
};

const sizeClasses: Record<Size, string> = {
  none: "text-xs p-0",
  xs: "text-xs px-2 py-0.5",
  sm: "text-sm px-3 py-1",
  md: "text-primary-button px-2.5",
  lg: "text-base px-4 py-2",
  xl: "px-6 py-2.5",
};

const iconSizeClasses: Record<Size, string> = {
  none: "!px-0",
  xs: "!px-1",
  sm: "!px-1.5",
  md: "!px-2",
  lg: "!p-2.5",
  xl: "!p-3",
};

const positionClasses: Record<Position, string> = {
  "top-left": "items-start justify-start",
  "top-center": "items-start justify-center",
  "top-right": "items-start justify-end",
  "center-left": "items-center justify-start",
  center: "items-center justify-center",
  "center-right": "items-center justify-end",
  "bottom-right": "items-end justify-end",
  "bottom-center": "items-end justify-center",
  "bottom-left": "items-end justify-start",
};

const borderClasses: Record<Roundness, string> = {
  start: "rounded-r-none",
  middle: "!rounded-none border-l-0 pl-0",
  end: "rounded-l-none border-l-0 pl-0",
  normal: "rounded-2sm",
  rounded: "rounded-full",
};

export { colorClasses, sizeClasses, iconSizeClasses, positionClasses, borderClasses };
