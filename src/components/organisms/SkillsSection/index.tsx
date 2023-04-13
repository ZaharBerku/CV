import type { FC } from "react";
import { Box } from "@components/atoms";
import { SectionTitle, SkillsSwiper } from "@components/molecules";
import { Container } from "@layouts/Container";

const SkillsSection: FC = () => {
  return (
    <Box.Container className="bg-primary-gradient pb-12">
      <Container>
        <SectionTitle title="My skills" />
        <SkillsSwiper />
      </Container>
    </Box.Container>
  );
};

export { SkillsSection };
