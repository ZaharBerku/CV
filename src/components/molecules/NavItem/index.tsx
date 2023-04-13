import type { FC } from "react";
import { Typography, Link } from "@components/atoms";

type NavItemProps = {
  queueNumber: number;
  nameNav: string;
};

const NavItem: FC<NavItemProps> = ({ queueNumber, nameNav }) => {
  return (
    <Link className="px-4 z-10 pb-10 pt-16 rounded-2sm bg-primary-gradient w-full h-40 sm:h-31.25 sm:max-w-17.5 relative block duration-300 delay-200 hover:scale-110 hover:z-20">
      <Typography tag="h2" className="absolute bottom-10 left-4">
        {queueNumber}
      </Typography>
      <Typography
        tag="p"
        className="absolute bottom-10 text-center left-28 sm:left-auto sm:bottom-0 sm:right-4 sm:top-0 sm:vertical-rl sm:-rotate-180"
      >
        {nameNav}
      </Typography>
    </Link>
  );
};

export { NavItem };
