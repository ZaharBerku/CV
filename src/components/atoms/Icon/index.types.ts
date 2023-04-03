import includedIcons from './Icons';

export type IconType = keyof typeof includedIcons;

export type IconProps = {
  type: IconType;
  className?: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  viewHeight?: string;
  viewWidth?: string;
  fill?: string;
  opacity?: string;
};
