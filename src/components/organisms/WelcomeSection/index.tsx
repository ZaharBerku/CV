import type { FC } from 'react';
import { Box } from '@components/atoms';
import { WelcomeBackground, WelcomeTitle } from '@components/molecules';

const WelcomeSection: FC = () => {
  return (
    <Box.Container className="w-screen h-screen relative">
      <WelcomeBackground />
      <WelcomeTitle />
    </Box.Container>
  );
};

export { WelcomeSection };
