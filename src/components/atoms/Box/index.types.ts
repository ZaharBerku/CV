import type { HTMLAttributes } from "react";

export type BoxComponentProps = HTMLAttributes<HTMLElement> & {
  tag?: keyof JSX.IntrinsicElements;
  content?: string;
};

export type BoxWrapperProps = HTMLAttributes<HTMLElement> & {
  tag?: BoxWrapperTag;
  content?: string;
};

export type BoxWrapperTag = "section" | "div" | "main" | "span";
