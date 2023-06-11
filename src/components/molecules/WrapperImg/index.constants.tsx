import type { ClassesType } from "./index.types";

export const classes: ClassesType = {
  circle: {
    wrapper:
      "relative max-w-xxs h-xxs w-full flex-wrapper-column md:max-w-96 md:h-96",
    box: "rounded-full max-w-xxs md:max-w-full absolute top-0 bottom-0 right-0 border-warmGray-100 border -left-4",
    img: "rounded-full max-w-xxs md:max-w-2xs",
  },
  square: {
    wrapper: "relative max-w-xs h-xs w-full md:max-w-96 md:h-96",
    box: " max-w-xs md:max-w-full absolute w-full border border-black rounded-2sm top-0.68 left-0.68 -bottom-0.68",
    img: "shadow-avatar rounded-2sm max-w-xs md:max-w-full",
  },
};
