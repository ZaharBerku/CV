import type { FC } from "react";
import type { IconProps } from "../index.types";

const IconJS: FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 72}
      height={height || 73}
      fill="none"
      viewBox="0 0 72 73"
      {...props}
    >
      <g clipPath="url(#clip0_68_9826)">
        <path fill="#F0DB4F" d="M.792.994h70.416v70.417H.792V.994z"></path>
        <path
          fill="#323330"
          d="M65.445 54.616c-.516-3.212-2.61-5.91-8.815-8.427-2.156-.99-4.559-1.7-5.275-3.333-.254-.95-.288-1.486-.127-2.062.462-1.867 2.69-2.45 4.458-1.914 1.138.382 2.215 1.258 2.865 2.657 3.038-1.967 3.032-1.954 5.154-3.306-.777-1.205-1.192-1.76-1.7-2.276-1.828-2.041-4.318-3.092-8.3-3.012l-2.075.268c-1.988.503-3.882 1.546-4.993 2.945-3.334 3.782-2.383 10.402 1.673 13.126 3.996 3 9.866 3.682 10.616 6.486.73 3.434-2.523 4.545-5.756 4.15-2.383-.495-3.708-1.706-5.141-3.909-2.637 1.526-2.637 1.526-5.348 3.086.643 1.406 1.318 2.042 2.396 3.26 5.1 5.173 17.865 4.92 20.154-2.912.093-.269.71-2.062.214-4.827zM39.072 33.358h-6.586l-.027 17.028c0 3.62.187 6.94-.402 7.958-.963 2.002-3.46 1.754-4.598 1.366-1.158-.57-1.747-1.38-2.43-2.523-.187-.329-.327-.583-.375-.603l-5.355 3.28c.89 1.827 2.203 3.414 3.883 4.444 2.51 1.506 5.883 1.968 9.41 1.158 2.297-.669 4.278-2.054 5.315-4.163 1.5-2.764 1.178-6.11 1.165-9.812.033-6.038 0-12.076 0-18.133z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_68_9826">
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

export { IconJS };
