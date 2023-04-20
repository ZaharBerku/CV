import type { FC } from "react";
import cx from "classnames";
import { Box, Typography } from "@components/atoms";
import type { SectionTitleProps } from "./index.types";

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <Box className="py-6 md:py-12 text-center">
      <Typography
        className={cx(
          "text-body-4xl inline-block after:block after:h-px2 after:w-full after:bg-white after:rounded-lg",
          className
        )}
        text={title}
        tag="h3"
      />
    </Box>
  );
};

export { SectionTitle };
