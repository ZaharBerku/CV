import type { HTMLAttributes } from "react";

export type ListProps = HTMLAttributes<
  HTMLOListElement | HTMLUListElement | HTMLDListElement
> & {
  tag?: "ul" | "ol" | "dl";
};

export type ItemProps = HTMLAttributes<HTMLLIElement> & {
  tag?: "li" | "dt" | "dd";
  text?: string;
};
