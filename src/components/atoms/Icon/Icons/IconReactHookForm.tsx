import type { FC } from "react";
import type { IconProps } from "../index.types";

const IconReactHookForm: FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width || 60}
      height={height || 60}
      className="Header-module--desktopLogo--c14c9"
      viewBox="0 0 100 100"
      {...props}
    >
      <path d="M73.56 13.32H58.14a8.54 8.54 0 00-16.27 0H26.44a11 11 0 00-11 11v57.31a11 11 0 0011 11h47.12a11 11 0 0011-11V24.32a11 11 0 00-11-11zm-30.92 2a1 1 0 001-.79 6.54 6.54 0 0112.78 0 1 1 0 001 .79h5.38v6.55a3 3 0 01-3 3H40.25a3 3 0 01-3-3v-6.55zm39.92 66.31a9 9 0 01-9 9H26.44a9 9 0 01-9-9V24.32a9 9 0 019-9h8.81v6.55a5 5 0 005 5h19.5a5 5 0 005-5v-6.55h8.81a9 9 0 019 9z"></path>
      <path d="MNaN NaNlNaN NaNaNaN NaN 0 00NaN NaNlNaN NaNaNaN NaN 0 00NaN NaNz"></path>
      <path d="M71.6 45.92H54a1 1 0 000 2h17.6a1 1 0 000-2z"></path>
      <path d="MNaN NaNlNaN NaNaNaN NaN 0 10NaN NaNlNaN NaNaNaN NaN 0 00NaN NaNz"></path>
      <path d="M71.1 69.49H53.45a1 1 0 100 2H71.1a1 1 0 000-2z"></path>
    </svg>
  );
};

export { IconReactHookForm };
