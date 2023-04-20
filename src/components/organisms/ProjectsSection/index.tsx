import type { FC } from "react";
import { Box } from "@components/atoms";
import { SectionTitle, Projects } from "@components/molecules";
import { Container } from "@layouts/Container";
import { projects } from "./index.constants";

const ProjectsSection: FC = () => {
  return (
    <Box.Container className="py-28">
      <Container>
        <SectionTitle
          title="Projects"
          className="text-black after:bg-primary"
        />
        <Projects projects={projects} />
      </Container>
    </Box.Container>
  );
};

export { ProjectsSection };
