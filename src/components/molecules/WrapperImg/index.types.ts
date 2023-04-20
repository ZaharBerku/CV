import type { Classes } from "@types/index";

export type ClassesNames = "circle" | "square";

export type ClassesType = {
  [className in ClassesNames]: {
    wrapper: string;
    box: string;
    img: string;
  };
};

export type WrapperImgType = {
  src: string;
  alt: string;
  classes?: Omit<Classes, "container"> & {
    img?: string;
    box?: string;
  };
  classesName?: ClassesNames;
};
