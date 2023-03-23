import type { FC } from "react";
import type { BoxComponentProps, BoxWrapperProps } from "./index.types";
import { createComponent } from "@utils/helpers";

const Component = createComponent<HTMLElement>();

const BoxComponent: FC<BoxComponentProps> = ({ tag = "div", content = null, ...props }) => {
  return <Component tag={tag} content={content} {...props} />;
};

const BoxWrapper: FC<BoxWrapperProps> = ({ tag = "div", content = null, ...props }) => {
  return <Component tag={tag} content={content} {...props} />;
};

const BoxContainer: FC<BoxWrapperProps> = ({ tag = "section", content = null, ...props }) => {
  return <Component tag={tag} content={content} {...props} />;
};

BoxComponent.displayName = "Box";
BoxWrapper.displayName = "Box.Wrapper";
BoxContainer.displayName = "Box.Container";

export const Box = Object.assign(BoxComponent, {
  Wrapper: BoxWrapper,
  Container: BoxContainer,
});
