import { FC, useState } from 'react';
import { Box } from '@components/atoms';
import { NavItem } from '@components/molecules';

type NavSectionProps = {};

const NavSection: FC<NavSectionProps> = () => {
  const [navItems, setNavItems] = useState([
    {
      id: 1,
      name: 'About my knowledge',
    },
    {
      id: 2,
      name: 'My project',
    },
    {
      id: 3,
      name: 'Recommendation',
    },
    {
      id: 4,
      name: 'Let’s talk',
    },
  ]);
  return (
    <Box.Container className="flex gap-5 justify-center items-center w-full py-10">
      {navItems.map((item) => {
        const { id, name } = item;
        return <NavItem key={id} nameNav={name} queueNumber={id} />;
      })}
    </Box.Container>
  );
};

export { NavSection };
