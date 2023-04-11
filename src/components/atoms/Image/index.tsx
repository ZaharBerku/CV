import type { FC } from "react";
import type { ImageProps } from "./index.types";

const Image: FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export { Image };
