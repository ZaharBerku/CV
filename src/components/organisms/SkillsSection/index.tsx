import type { FC } from 'react';
import { Box } from '@components/atoms';
import { SectionTitle, SkillsSwiper } from '@components/molecules';

type SkillsSectionProps = {};

const SkillsSection: FC<SkillsSectionProps> = () => {
  return (
    <Box.Container className="bg-primary-gradient pb-12">
      <SectionTitle title="My skills" />
      <SkillsSwiper />
    </Box.Container>
  );
};

export { SkillsSection };
