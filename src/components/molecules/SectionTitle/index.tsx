import type { FC } from 'react';
import { Box, Typography } from '@components/atoms';

type SectionTitleProps = { title: string };

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box className="py-12 text-center">
      <Typography
        className="text-body-4xl inline-block after:block after:h-px2 after:w-full after:bg-white after:rounded-lg"
        text={title}
        tag="h3"
      />
    </Box>
  );
};

export { SectionTitle };
