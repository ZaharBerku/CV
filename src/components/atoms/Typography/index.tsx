import { createElement } from "react";
import type { FC } from "react";
import type { TypographyProps } from "./index.types";
import { variantsTypography } from "./index.constants";

const Typography: FC<TypographyProps> = ({ variant = "p", children, ...props }) => {
  const Component: FC<TypographyProps> = () => createElement(variantsTypography[variant]);
  return <Component {...props}>{children}</Component>;
};

export { Typography };
