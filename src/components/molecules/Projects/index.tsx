import type { FC } from "react";
import { Box, List } from "@components/atoms";
import { WrapperImg } from "@components/molecules";
import type {
  ProjectsProps,
  ProjectProps,
  ListInfoProjectProps,
} from "./index.types";

const ListInfoProject: FC<ListInfoProjectProps> = ({ info, title }) => {
  return (
    <List
      title={title}
      classes={{
        wrapper: "flex-1",
        container: "flex-wrapper-column items-start gap-4",
        title: "text-primary-button font-bold mb-6",
      }}
    >
      {info.map((item) => {
        const { name, text } = item;
        return (
          <List.Item className="text-span-xl">
            <Box className="font-bold" tag="span">
              {name}:{" "}
            </Box>
            {text}
          </List.Item>
        );
      })}
    </List>
  );
};

const Project: FC<ProjectProps> = ({ project }) => {
  const { img, title, info } = project;
  return (
    <Box className="flex-wrapper-center h-96 gap-24 odd:flex-row-reverse">
      <WrapperImg
        src={img}
        alt={title}
        classes={{
          wrapper: "w-23.25 h-23.25",
          box: "w-23.25 h-23.25",
          img: "w-23.25 h-23.25",
        }}
      />
      <ListInfoProject title={title} info={info} />
    </Box>
  );
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Box.Wrapper className="flex-wrapper-column gap-11">
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </Box.Wrapper>
  );
};

export { Projects };
