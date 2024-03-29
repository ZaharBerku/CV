import type { FC } from "react";
import cx from "classnames";
import type { ButtonProps } from "./index.types";
import {
  colorClasses,
  borderClasses,
  positionClasses,
  sizeClasses,
} from "./index.constants";

const Button: FC<ButtonProps> = ({
  children,
  color = "primary",
  rounded = "normal",
  positionText = "center",
  sizeButton = "md",
  className,
  full = false,
  ...props
}) => {
  return (
    <button
      className={cx(
        "flex px-24",
        full ? "w-full" : "w-fit",
        colorClasses[color],
        borderClasses[rounded],
        positionClasses[positionText],
        sizeClasses[sizeButton],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
