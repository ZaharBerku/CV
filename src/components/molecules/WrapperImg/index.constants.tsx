import type { ClassesType } from "./index.types";

export const classes: ClassesType = {
  circle: {
    wrapper:
      "relative max-w-2xs h-2xs w-full flex-wrapper-column md:max-w-96 md:h-96",
    box: "rounded-full w-full absolute top-0 bottom-0 border-warmGray-100 border -left-4",
    img: "rounded-full max-w-xs md:max-w-2xs",
  },
  square: {
    wrapper: "relative",
    box: "absolute w-full border border-black rounded-2sm top-0.68 left-0.68 -bottom-0.68",
    img: "shadow-avatar rounded-2sm",
  },
};
