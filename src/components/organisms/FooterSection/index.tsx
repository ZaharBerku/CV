import type { FC } from "react";
import { Box } from "@components/atoms";
import { ContentFooter, AvatarFooter } from "@components/molecules";
import { Container } from "@layouts/Container";

const FooterSection: FC = () => {
  return (
    <Box.Container className="w-full bg-black pt-24 pb-16 md:pt-32 md:pb-20">
      <Container>
        <Box className="flex-wrapper-column flex-col-reverse gap-9 md:flex-wrapper-center md:justify-between">
          <ContentFooter />
          <AvatarFooter />
        </Box>
      </Container>
    </Box.Container>
  );
};

export { FooterSection };
