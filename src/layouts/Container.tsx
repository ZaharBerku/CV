import type { FC, PropsWithChildren } from "react";
import cx from "classnames";
import { Box } from "@components/atoms";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <Box.Wrapper
      className={cx("max-w-screen-2lg m-auto px-5 box-border", className)}
    >
      {children}
    </Box.Wrapper>
  );
};

export { Container };
