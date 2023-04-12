import type { FC } from "react";
import { Box, Typography, List } from "@components/atoms";
import { TypedText } from "@components/molecules";

const MyInfo: FC = () => {
  const items = [
    "code refactoring",
    "code review",
    "creating a lot of stage form",
    "working on the chat",
    "working on the chat",
  ];
  return (
    <Box.Wrapper className="max-w-2xl w-full">
      <TypedText />
      <Box className="w-full max-w-md">
        <Typography tag="p" className="text-black text-span-xl">
          I'm Nazar Front-end developer from Ukraine 🇺🇦. Working in ... Working
          as front-end developer more than year.
        </Typography>
        <Typography tag="p" className="text-black text-span-xl ">
          My silence in code:
        </Typography>
        <List>
          {items.map((item) => {
            return <List.Item>{item}</List.Item>;
          })}
        </List>
      </Box>
    </Box.Wrapper>
  );
};

export { MyInfo };
