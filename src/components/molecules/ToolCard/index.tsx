import type { FC } from "react";
import { Box, Icon } from "@components/atoms";
import type { ToolCardProps } from "./index.types";

const ToolCard: FC<ToolCardProps> = ({ name, mastery, typeToolIcon }) => {
  return (
    <Box.Wrapper className="h-32 w-24 relative sm:w-44 sm:h-56 rounded-12xl bg-white shadow-card px-8 py-6 sm:px-12 sm:py-9 flex-wrapper-column gap-6">
      <Icon
        type={typeToolIcon}
        className="absolute top-6 sm:top-11 w-10 h-10 sm:w-4.68 sm:h-4.68"
      />
      <Box className="flex-wrapper-column flex-1 justify-end sm:gap-1">
        <Box className="text-span-2xl" content={mastery} tag={"span"} />
        <Box className="text-span-xl" content={name} tag={"span"} />
      </Box>
    </Box.Wrapper>
  );
};

export { ToolCard };
