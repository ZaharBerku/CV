import type { ProjectItem } from "@utils/types";
import projectAvatar from "@assets/images/project-avatar.png";

export const projects: ProjectItem[] = [
  {
    title: "OnlySky",
    info: [
      {
        name: "Responsibility",
        text: "at the very beginning, I had a task to refactor the code, then I created many stage forms and the use of state (Redux) in the project, then there was a task to create an admin panel, and there I got acquainted with the chart.",
      },
      {
        name: "Technologies",
        text: "react-hook-form, React, TypeScript, yup, classnames, tailwind css, redux, react-chartjs-2, rc-slider, react-table, react-router-dom, fullcalendar, Jest",
      },
    ],
    img: projectAvatar,
  },
  {
    title: "Kasper",
    info: [
      {
        name: "Responsibility",
        text: "this project was very intense, it was divided into sub-projects, as it used micro-frontend. I was also involved in setting up the webpack and splitting it into micro-projects, and had to work a little with AWS",
      },
      {
        name: "Technologies",
        text: "formik, chatkitty, single-spa, Material UI, react-router-dom, p-queue, React, TypeScript, yup, clsx, webpack, rc-slider, react-table, react-modern-calendar-date-picker, react-query a little bit",
      },
    ],
    img: projectAvatar,
  },
  {
    title: "New-exchange",
    info: [
      {
        name: "Responsibility",
        text: "the job was to translate the site from Japanese to English. And then I got a little acquainted with Next.js and i18next",
      },
      {
        name: "Technologies",
        text: "i18next, Next.js, chart.js",
      },
    ],
    img: projectAvatar,
  },
];
