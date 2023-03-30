import type { includedIcons } from './index.constants';

export type IconType = keyof typeof includedIcons | string;

export type IconProps = {
  type: IconType;
  className?: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  viewHeight?: string;
  viewWidth?: string;
};
