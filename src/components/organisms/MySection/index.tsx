import type { FC } from "react";
import { Box } from "@components/atoms";
import { MyInfo, Avatar } from "@components/molecules";
import { Container } from "@layouts/Container";

const MySection: FC = () => {
  return (
    <Box.Container className="p-16">
      <Container>
        <Box.Wrapper className="flex-wrapper-center gap-8">
          <MyInfo />
          <Avatar />
        </Box.Wrapper>
      </Container>
    </Box.Container>
  );
};

export { MySection };
