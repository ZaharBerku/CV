import type { FC } from "react";
import { Box, Typography, Button } from "@components/atoms";

const ContentFooter: FC = () => {
  return (
    <Box.Wrapper className="max-w-31.25 flex-wrapper-column items-center md:items-start gap-6">
      <Typography
        className="text-center text-body-4xl font-normal md:text-start"
        text="Let’s take our relationship to the next level your business"
      />
      <Button>Let’s talk</Button>
    </Box.Wrapper>
  );
};

export { ContentFooter };
