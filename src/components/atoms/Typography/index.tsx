import type { FC } from 'react';
import cx from 'classnames';
import { createComponent } from '@utils/helpers';
import type { TypographyProps } from './index.types';
import { sizes } from './index.constants';

const Typography: FC<TypographyProps> = ({
  tag = 'p',
  text = null,
  className,
  ...props
}) => {
  const Component = createComponent<HTMLHeadingElement>();
  return (
    <Component
      tag={tag}
      content={text}
      className={cx(className, sizes[tag])}
      {...props}
    />
  );
};

export { Typography };
