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

const AvatarFooter: FC = () => {
  return (
    <Box.Wrapper className="relative max-w-2xs h-2xs w-full flex-wrapper-column md:max-w-96 md:h-96">
      <Box className="rounded-full w-full absolute top-0 bottom-0 border-warmGray-100 border -left-4" />
      <Image
        className="rounded-full max-w-xs md:max-w-2xs"
        src={avatar}
        alt="avatar"
      />
    </Box.Wrapper>
  );
};

export { Avatar, AvatarFooter };
