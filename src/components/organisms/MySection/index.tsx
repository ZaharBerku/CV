import type { FC } from "react";
import { Box } from "@components/atoms";
import { MyInfo, Avatar } from "@components/molecules";

const MySection: FC = () => {
  return (
    <Box.Container className="p-16">
      <Box.Wrapper className="flex-wrapper-center gap-8">
        <MyInfo />
        <Avatar />
      </Box.Wrapper>
    </Box.Container>
  );
};

export { MySection };
