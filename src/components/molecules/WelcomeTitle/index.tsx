import type { FC } from 'react';
import { Box, Typography, Button } from '@components/atoms';

type WelcomeTitleProps = {};

const WelcomeTitle: FC<WelcomeTitleProps> = () => {
  return (
    <>
      <Box.Wrapper className="flex flex-col z-20 justify-center items-center max-w-3xl w-full flex-wrap gap-2 pointer-events-none absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 px-5">
        <Typography
          className="text-name"
          tag={'p'}
          text={'I’m Nazar Dubovyk'}
        />
        <Typography
          className="text-center"
          tag={'h1'}
          text={'Welcome to my website'}
        />
      </Box.Wrapper>
      <Button
        className="absolute top-3/4 left-1/2 -translate-x-2/4 -translate-y-2/4 z-20"
        onClick={() => console.log('click')}
      >
        Discover
      </Button>
    </>
  );
};

export { WelcomeTitle };
