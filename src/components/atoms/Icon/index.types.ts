import type includedIcons from "./Icons";

export type IconType = keyof typeof includedIcons;

export type IconProps = {
  type: IconType;
  className?: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  fill?: string;
  opacity?: string;
};
