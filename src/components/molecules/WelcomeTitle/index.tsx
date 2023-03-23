import type { FC } from "react";
import { Box, Typography } from "@components/atoms";

type WelcomeTitleProps = {};

const WelcomeTitle: FC<WelcomeTitleProps> = () => {
  return (
    <Box.Wrapper className="flex flex-col justify-center items-center max-w-3xl w-full flex-wrap gap-2 pointer-events-none absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
      <Typography className="text-name" tag={"p"} text={"I’m Nazar Dubovyk"} />
      <Typography className="text-body text-center" tag={"h1"} text={"Welcome to my website"} />
    </Box.Wrapper>
  );
};

export { WelcomeTitle };
