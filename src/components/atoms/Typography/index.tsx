import type { FC } from "react";
import type { TypographyProps } from "./index.types";
import { createComponent } from "@utils/helpers";

const Typography: FC<TypographyProps> = ({ tag = "p", text = null, ...props }) => {
  const Component = createComponent<HTMLHeadingElement>();
  return <Component tag={tag} content={text} {...props} />;
};

export { Typography };
