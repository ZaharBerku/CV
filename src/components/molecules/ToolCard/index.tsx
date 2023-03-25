import type { FC } from "react";
import { Box, Typography, Icon } from "@components/atoms";

type ToolCardProps = {
  name: string;
  mastery: string;
  typeToolIcon: string;
};

const ToolCard: FC<ToolCardProps> = ({ name, mastery, typeToolIcon }) => {
  return (
    <Box.Wrapper className="w-44 h-56 rounded-2sm bg-white shadow-card px-12 py-9 flex-wrapper-column gap-6">
      {/* <Icon type={typeToolIcon} /> */}
      <Box className="flex-wrapper-column gap-1">
        <Typography className="" text={mastery} tag={"span"} />
        <Typography text={name} tag={"span"} />
      </Box>
    </Box.Wrapper>
  );
};

export { ToolCard };
