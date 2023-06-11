import type { FC } from "react";
import { Box, List } from "@components/atoms";
// import { WrapperImg } from "@components/molecules";
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
      {info.map((item, index) => {
        const { name, text } = item;
        return (
          <List.Item key={index} className="text-span-xl">
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
  const { title, info } = project;
  return (
    <Box className="flex flex-col justify-center h-full max-w-23.25 gap-12 md:!flex-wrapper-center md:max-w-full md:gap-24">
      {/*<WrapperImg*/}
      {/*  src={img}*/}
      {/*  alt={title}*/}
      {/*  classes={{*/}
      {/*    wrapper: "w-full sm:max-w-23.25 sm:h-23.25",*/}
      {/*    box: "w-full sm:max-w-23.25 sm:h-23.25",*/}
      {/*    img: "w-full h-64 sm:max-w-23.25 sm:h-23.25",*/}
      {/*  }}*/}
      {/*/>*/}
      <ListInfoProject title={title} info={info} />
    </Box>
  );
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Box.Wrapper className="flex-wrapper-column gap-11 md:items-start">
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </Box.Wrapper>
  );
};

export { Projects };
