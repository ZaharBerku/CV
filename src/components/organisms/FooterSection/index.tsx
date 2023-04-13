import type { FC } from "react";
import { Box } from "@components/atoms";
import { Container } from "@layouts/Container";

const FooterSection: FC = () => {
  return (
    <Box.Container className="w-full bg-black">
      <Container></Container>
    </Box.Container>
  );
};

export { FooterSection };
