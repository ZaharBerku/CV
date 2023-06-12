import type { ProjectItem } from "@utils/types";
import projectAvatar from "@assets/images/project-avatar.png";

export const projects: ProjectItem[] = [
  {
    title: "Kasper",
    info: [
      {
        name: "Responsibility",
        text: "My main tasks on the project included implementing a bubble chat and fixing related bugs. Furthermore, my task was to transfer login and chat to separate micro-frontends using Single-SPA. In addition, I also developed the patient filtering function and Frequency for sending patient mailings. I also created pagination for tables and worked with cookie data The entire project was written using various technologies and frameworks, which gave me a lot of experience and knowledge about web application development. I always strive to develop and improve my skills to provide the best results for my clients.",
      },
      {
        name: "Technologies",
        text: "MobX, Formik, ChatKitty, AWS Amplify, rc-slider, React-Table, Single-SPA, Yup, Single-SPA-React, Webpack, Date-FNS, Material UA, react-number-format",
      },
    ],
    img: projectAvatar,
  },
  {
    title: "OnlySky",
    info: [
      {
        name: "Responsibility",
        text:
          "One of my responsibilities was to identify and fix bugs related to forms, as well as create multi-step forms for ordering and payment. After that, we worked on an administrative panel where I created forms with tables and added charts. I also created a registration form for our project.\n" +
          "In addition, I was responsible for conducting code reviews and transferring the project to pnpm workspace. I am always dedicated to my work and strive to find optimal solutions for each task. My knowledge and experience allow me to work effectively in a team and achieve our goals.",
      },
      {
        name: "Technologies",
        text: "react-hook-form, chart.js, rc-slider, react-number-format, @reduxjs/toolkit, react-table, tailwindcss, @headlessui/react, @testing-library/jest-dom",
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
