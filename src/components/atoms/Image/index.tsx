import type { FC } from "react";
import type { ImageProps } from "./index.types";

const Image: FC<ImageProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export { Image };
