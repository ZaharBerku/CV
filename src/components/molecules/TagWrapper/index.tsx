import type { FC } from "react";
import { Box } from "@components/atoms";
import type { TagWrapperProps } from "./index.types";

const TagWrapper: FC<TagWrapperProps> = ({ text }) => {
  return (
    <Box className="text-primary-button font-bold text-black" tag="span">
      {"<"}
      <Box className="text-primary-button font-bold text-primary" tag="span">
        {text}
      </Box>
      {">"}
    </Box>
  );
};

export { TagWrapper };
