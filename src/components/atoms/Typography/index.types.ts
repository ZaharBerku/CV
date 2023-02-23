import type { HTMLAttributes } from "react";

type TypographyProps = HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> & {
  variant?: Variants;
};

type Variants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type { TypographyProps, Variants };
