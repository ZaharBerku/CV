import type { FC } from "react";
import { Box } from "@components/atoms";
import { MyInfo, Avatar } from "@components/molecules";
import { Container } from "@layouts/Container";

const MySection: FC = () => {
  return (
    <Box.Container className="pb-10">
      <Container>
        <Box.Wrapper className="flex-wrapper-column flex-col-reverse gap-8 md:flex-wrapper-center">
          <MyInfo />
          <Avatar />
        </Box.Wrapper>
      </Container>
    </Box.Container>
  );
};

export { MySection };
