import type { FC } from 'react';
import { Box, Typography, Link } from '@components/atoms';

type NavItemProps = {
  queueNumber: number;
  nameNav: string;
};

const NavItem: FC<NavItemProps> = ({ queueNumber, nameNav }) => {
  return (
    <Link className="px-4 z-10 pb-10 pt-16 rounded-2sm bg-primary-gradient h-31.25 max-w-17.5 w-full relative block duration-300 delay-200 hover:scale-110 hover:z-20">
      <Typography tag="h2" className="absolute bottom-10 left-4">
        {queueNumber}
      </Typography>
      <Typography
        tag="p"
        className="-rotate-180 absolute top-0 bottom-0 right-4 vertical-rl text-center"
      >
        {nameNav}
      </Typography>
    </Link>
  );
};

export { NavItem };
