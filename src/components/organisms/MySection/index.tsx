import type { FC } from "react";
import { Box } from "@components/atoms";
import { MyInfo, WrapperImg } from "@components/molecules";
import { Container } from "@layouts/Container";
import avatar from "@assets/images/avatar.png";

const MySection: FC = () => {
  return (
    <Box.Container className="pb-10">
      <Container>
        <Box.Wrapper className="flex-wrapper-column flex-col-reverse gap-8 md:flex-wrapper-center">
          <MyInfo />
          <WrapperImg src={avatar} alt="avatar" />
        </Box.Wrapper>
      </Container>
    </Box.Container>
  );
};

export { MySection };
