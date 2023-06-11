import type { FC } from "react";
import { Box } from "@components/atoms";
import { ContentFooter, WrapperImg } from "@components/molecules";
import { Container } from "@layouts/Container";
import avatarFooter from "@assets/images/avatar-footer.png";

const FooterSection: FC = () => {
  return (
    <Box.Container className="w-full bg-black pt-24 pb-16 md:pt-32 md:pb-20">
      <Container>
        <Box className="flex-wrapper-column flex-col-reverse gap-9 md:flex-wrapper-center md:justify-between">
          <ContentFooter />
          <WrapperImg src={avatarFooter} alt="avatar" classesName="circle" />
        </Box>
      </Container>
    </Box.Container>
  );
};

export { FooterSection };
