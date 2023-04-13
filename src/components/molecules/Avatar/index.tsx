import type { FC } from "react";
import { Image, Box } from "@components/atoms";
import avatar from "@assets/images/avatar.png";

const Avatar: FC = () => {
  return (
    <Box.Wrapper className="relative">
      <Box className="absolute w-full border border-black rounded-2sm top-0.68 left-0.68 -bottom-0.68" />
      <Image className="shadow-avatar rounded-2sm" src={avatar} alt="avatar" />
    </Box.Wrapper>
  );
};

export { Avatar };
