import type { FC } from 'react';
import type { IconProps } from './index.types';
import includedIcons from './Icons';

const Icon: FC<IconProps> = ({
  type,
  className,
  onClick,
  viewHeight,
  viewWidth,
  ...props
}) => {
  const IconSelected = (includedIcons as any)[type];

  if (!IconSelected) {
    console.error(`Icon with type ${type} is not included.`);
    return null;
  }

  return (
    <IconSelected
      className={className}
      onClick={onClick}
      viewHeight={viewHeight}
      viewWidth={viewWidth}
      {...props}
    />
  );
};

export { Icon };
