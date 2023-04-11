import type { FC } from "react";
import { Typography } from "@components/atoms";
import { TagWrapperProps } from "./index.types";

const TagWrapper: FC<TagWrapperProps> = ({ text }) => {
  return (
    <Typography className="text-primary-button font-bold text-black" tag="span">
      {"<"}
      <Typography
        className="text-primary-button font-bold text-primary"
        tag="span"
      >
        {text}
      </Typography>
      {">"}
    </Typography>
  );
};

export { TagWrapper };
