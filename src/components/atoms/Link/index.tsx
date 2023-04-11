import type { FC, MouseEvent } from "react";
import type { LinkProps } from "./index.types";

const Link: FC<LinkProps> = ({ href = "#", children, ...props }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(href, "_blank");
    // onClick(event);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export { Link };
