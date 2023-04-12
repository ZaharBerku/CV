import type { FC } from "react";
import { Box, Typography, Button } from "@components/atoms";

const WelcomeTitle: FC = () => {
  return (
    <>
      <Box.Wrapper className="flex flex-col z-20 justify-center items-center max-w-4xl w-full flex-wrap gap-2 pointer-events-none absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 px-5">
        <Typography
          className="text-name"
          tag={"p"}
          text={"I’m Nazar Dubovyk"}
        />
        <Typography
          className="text-center"
          tag={"h1"}
          text={"Welcome to my website"}
        />
        <Button
          className="pointer-events-auto mt-6"
          onClick={() => console.log("click")}
        >
          Discover
        </Button>
      </Box.Wrapper>
    </>
  );
};

export { WelcomeTitle };
