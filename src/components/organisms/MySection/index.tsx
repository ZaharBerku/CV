import type { FC } from "react";
import { Box } from "@components/atoms";
import { MyInfo, WrapperImg } from "@components/molecules";
import { Container } from "@layouts/Container";
import avatar from "@assets/images/avatar.png";

const MySection: FC = () => {
  return (
    <Box.Container className="pb-10">
      <Container>
        <Box.Wrapper className="max-w-xl m-auto flex-wrapper-column px-10 flex-col gap-14 md:gap-x-24 md:px-0 md:max-w-full md:flex-wrapper-center">
          <WrapperImg
            classes={{
              wrapper: "",
            }}
            src={avatar}
            alt="avatar"
          />
          <MyInfo />
        </Box.Wrapper>
      </Container>
    </Box.Container>
  );
};

export { MySection };
