import type { FC } from "react";
import { Box, Icon } from "@components/atoms";
import type { ToolCardProps } from "./index.types";

const ToolCard: FC<ToolCardProps> = ({ name, mastery, typeToolIcon }) => {
  return (
    <Box.Wrapper className="w-44 h-56 rounded-12xl bg-white shadow-card px-12 py-9 flex-wrapper-column justify-around gap-6">
      <Icon type={typeToolIcon} className="flex-1" />
      <Box className="flex-wrapper-column gap-1 flex-1">
        <Box className="text-span-2xl" content={mastery} tag={"span"} />
        <Box className="text-span-xl" content={name} tag={"span"} />
      </Box>
    </Box.Wrapper>
  );
};

export { ToolCard };
