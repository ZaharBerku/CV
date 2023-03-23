import React, { forwardRef } from "react";
import type { ElementType, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type ComponentProps<T> = PropsWithChildren<{
  tag: ElementType;
  content?: ReactNode | string;
}> &
  HTMLAttributes<T>;

const Component = <T,>(
  { tag: Component, children, content, ...props }: ComponentProps<T>,
  ref: React.ForwardedRef<T>
) => {
  return (
    <Component ref={ref} {...props}>
      {children || content}
    </Component>
  );
};

const createComponent = <T,>() => {
  return forwardRef<T, ComponentProps<T>>(Component);
};

export { createComponent };
