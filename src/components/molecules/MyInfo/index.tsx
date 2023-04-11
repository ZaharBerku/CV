import type { FC } from "react";
import { Box, Typography, List } from "@components/atoms";

const MyInfo: FC = () => {
  // const items = [
  //   "code refactoring",
  //   "code review",
  //   "creating a lot of stage form",
  //   "working on the chat",
  //   "working on the chat",
  // ];
  return (
    <Box.Wrapper>
      <Typography>
        I'm Nazar Front-end developer from Ukraine 🇺🇦. Working in ... Working as
        front-end developer more than year. My silence in code: code
        refactoring, code review, creating a lot of stage forms, working on the
        chat, making the frequency of sending messages to emails and sms, having
        some experience in creating an admin panel.
      </Typography>
      <List>
        <List.Item></List.Item>
      </List>
    </Box.Wrapper>
  );
};

export { MyInfo };
