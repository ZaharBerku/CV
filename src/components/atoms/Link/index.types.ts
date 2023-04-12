import type { ReactNode, PropsWithChildren, HTMLAttributes } from "react";

export type LinkProps = PropsWithChildren<{
  href?: string;
  children: ReactNode;
}> &
  HTMLAttributes<HTMLAnchorElement>;
