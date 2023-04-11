import type { HTMLAttributes } from "react";

export type ImageProps = HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};
