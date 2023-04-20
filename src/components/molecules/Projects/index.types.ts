import type { ProjectItem, InfoProject } from "@utils/types/index";

export type ProjectsProps = {
  projects: ProjectItem[];
};

export type ListInfoProjectProps = {
  info: InfoProject[];
  title: string;
};

export type ProjectProps = { project: ProjectItem };
