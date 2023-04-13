import { FC, useState } from "react";
import { Box } from "@components/atoms";
import { NavItem } from "@components/molecules";
import { Container } from "@layouts/Container";

const NavSection: FC = () => {
  const [navItems] = useState([
    {
      id: 1,
      name: "About my knowledge",
    },
    {
      id: 2,
      name: "My project",
    },
    {
      id: 3,
      name: "Recommendation",
    },
    {
      id: 4,
      name: "Let’s talk",
    },
  ]);
  return (
    <Box.Container className="w-full">
      <Container>
        <Box.Wrapper className="flex-wrapper-column sm:flex-wrapper-center gap-5 w-full py-10">
          {navItems.map((item) => {
            const { id, name } = item;
            return <NavItem key={id} nameNav={name} queueNumber={id} />;
          })}
        </Box.Wrapper>
      </Container>
    </Box.Container>
  );
};

export { NavSection };
