import type { FC } from "react";
import { Box, Typography, List, Image } from "@components/atoms";
import avatar from "@assets/images/avatar.png";

const MyInfo: FC = () => {
  const items = [
    "code refactoring",
    "code review",
    "creating a lot of stage form",
    "working on the chat",
    "working on the chat",
  ];
  return (
    <Box.Wrapper className="flex-wrapper-center gap-10">
      <Box.Wrapper>
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
      </Box.Wrapper>
      <Image src={avatar} alt="avatar" />
    </Box.Wrapper>
  );
};

export { MyInfo };
