import type { FC } from "react";
import type { IconProps } from "../index.types";

const IconHTML: FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 72}
      height={height || 73}
      fill="none"
      viewBox="0 0 72 73"
      {...props}
    >
      <path
        fill="#E44D26"
        d="M15.668 65.651l-4.524-50.743h49.712l-4.529 50.735-20.358 5.644-20.301-5.636z"
      ></path>
      <path
        fill="#F16529"
        d="M36 66.973l16.45-4.56 3.87-43.356H36v47.916z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M36 37.877h-8.236l-.568-6.374H36V25.28H20.395l.148 1.67 1.53 17.15H36v-6.223zm0 16.162l-.028.008-6.93-1.872-.443-4.963H22.35l.872 9.771 12.748 3.54.029-.009V54.04z"
      ></path>
      <path
        fill="#000"
        d="M15.769 1.117h3.162v3.125h2.894V1.117h3.163v9.462h-3.163V7.411h-2.893v3.168h-3.163V1.117zm13.377 3.138h-2.784V1.117h8.733v3.138h-2.786v6.324h-3.163V4.255zm7.335-3.138h3.297l2.03 3.325 2.026-3.325h3.299v9.462h-3.15V5.89l-2.176 3.365h-.055l-2.177-3.365v4.69H36.48V1.117zm12.226 0h3.164v6.335h4.447v3.128h-7.61V1.117z"
      ></path>
      <path
        fill="#fff"
        d="M35.978 37.877V44.1h7.664l-.722 8.071-6.942 1.874v6.474l12.76-3.535.093-1.052 1.462-16.384.152-1.67H35.978zm0-12.597v6.223h15.033l.125-1.398.284-3.155.149-1.67h-15.59z"
      ></path>
    </svg>
  );
};

export { IconHTML };
