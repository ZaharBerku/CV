import type { FC } from "react";
import type { IconProps } from "../index.types";

const IconCss: FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 72}
      height={height || 73}
      fill="none"
      viewBox="0 0 72 73"
      {...props}
    >
      <g clipPath="url(#clip0_68_9849)">
        <path
          fill="#131313"
          d="M50.194 3.496h-4.153l4.32 4.687v2.232h-8.897V7.802h4.319l-4.32-4.687V.88h8.731v2.615zm-10.494 0h-4.154l4.32 4.687v2.232h-8.897V7.802h4.32l-4.32-4.687V.88h8.73v2.615zm-10.392.107h-4.482v4.09h4.482v2.722H21.64V.88h7.668v2.722z"
        ></path>
        <path
          fill="#1572B6"
          d="M15.532 65.85l-4.555-51.083h50.044L56.464 65.84l-20.494 5.682-20.437-5.674z"
        ></path>
        <path
          fill="#33A9DC"
          d="M36 67.18l16.56-4.591 3.896-43.645H36V67.18z"
        ></path>
        <path
          fill="#fff"
          d="M36 37.45h8.29l.573-6.415H36V24.77h15.71l-.15 1.681-1.54 17.264H36v-6.264z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M36.038 53.722l-.028.008-6.977-1.885-.447-4.996h-6.288l.878 9.837 12.833 3.562.029-.009v-6.517z"
        ></path>
        <path
          fill="#fff"
          d="M43.758 43.45l-.755 8.39-6.987 1.887v6.518l12.843-3.56.095-1.058 1.09-12.177h-6.286z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M36.022 24.77v6.265H20.89l-.127-1.408-.285-3.176-.15-1.68h15.694zm-.021 12.681v6.266h-6.89l-.125-1.408-.286-3.177-.15-1.68H36z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_68_9849">
          <path
            fill="#fff"
            d="M0 0H72V72H0z"
            transform="translate(0 .202)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { IconCss };
