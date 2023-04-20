import type { FC } from "react";
import cx from "classnames";
import { Image, Box } from "@components/atoms";
import type { WrapperImgType } from "./index.types";
import { classes } from "./index.constants";

const WrapperImg: FC<WrapperImgType> = ({
  src,
  alt,
  classes: customClasses,
  classesName = "square",
}) => {
  const { wrapper, box, img } = classes[classesName];
  return (
    <Box.Wrapper className={cx(wrapper, customClasses?.wrapper)}>
      <Box className={cx(box, customClasses?.box)} />
      <Image className={cx(img, customClasses?.img)} src={src} alt={alt} />
    </Box.Wrapper>
  );
};

export { WrapperImg };
