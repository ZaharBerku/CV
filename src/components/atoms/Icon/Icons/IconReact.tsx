import { FC } from 'react';
import { IconProps } from '../index.types';

const IconReact: FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 60}
      height={height || 73}
      fill="none"
      viewBox="0 0 60 73"
      {...props}
    >
      <path
        fill="#61DAFB"
        d="M30 32.218a5.393 5.393 0 100-10.786 5.393 5.393 0 000 10.786z"
      ></path>
      <path
        fill="#61DAFB"
        d="M30 46.656c4.233 4.117 8.408 6.552 11.771 6.552 1.102 0 2.145-.232 3.015-.753 3.015-1.74 4.117-6.089 3.073-12.293a38.65 38.65 0 00-.695-3.364c1.16-.347 2.203-.695 3.247-1.043 5.856-2.262 9.103-5.393 9.103-8.814 0-3.479-3.247-6.61-9.103-8.814a26.592 26.592 0 00-3.247-1.043c.29-1.16.521-2.262.695-3.363.986-6.32-.116-10.728-3.13-12.467C43.858.732 42.814.5 41.712.5c-3.305 0-7.538 2.435-11.77 6.552C25.766 2.935 21.592.5 18.228.5c-1.101 0-2.145.232-3.015.754-3.015 1.74-4.117 6.088-3.073 12.293.174 1.101.406 2.203.696 3.363-1.16.348-2.204.695-3.248 1.043C3.733 20.215.486 23.346.486 26.767c0 3.48 3.247 6.61 9.103 8.814 1.044.406 2.088.754 3.248 1.044a38.648 38.648 0 00-.696 3.363c-.986 6.204.116 10.611 3.073 12.293.87.521 1.914.753 3.015.753 3.363.116 7.538-2.32 11.771-6.378zm-3.247-7.828c1.044.058 2.145.058 3.247.058 1.102 0 2.204 0 3.247-.058-1.043 1.392-2.145 2.667-3.247 3.885-1.102-1.218-2.203-2.493-3.247-3.885zm-7.19-5.972c.58.985 1.102 1.913 1.74 2.84a62.206 62.206 0 01-5.103-.869c.522-1.566 1.102-3.19 1.797-4.813.464.928.986 1.914 1.566 2.842zM16.2 18.88a62.248 62.248 0 015.102-.87c-.58.928-1.16 1.856-1.74 2.842-.579.985-1.1 1.913-1.565 2.899a38.763 38.763 0 01-1.797-4.87zm3.189 7.944a61.368 61.368 0 012.493-4.697c.87-1.507 1.856-3.015 2.841-4.523 1.74-.115 3.48-.173 5.277-.173 1.856 0 3.595.058 5.277.174a64.582 64.582 0 012.841 4.522 61.368 61.368 0 012.493 4.697 61.351 61.351 0 01-2.493 4.697c-.87 1.508-1.855 3.015-2.841 4.523-1.74.116-3.48.174-5.277.174-1.855 0-3.595-.058-5.276-.174a64.557 64.557 0 01-2.842-4.523 61.351 61.351 0 01-2.493-4.697zm22.672-3.131l-1.566-2.9c-.58-.985-1.101-1.913-1.74-2.84 1.798.231 3.48.521 5.103.87a55.07 55.07 0 01-1.797 4.87zm0 6.262c.696 1.624 1.276 3.247 1.797 4.813a62.196 62.196 0 01-5.102.87c.58-.928 1.16-1.856 1.74-2.841.521-.87 1.043-1.856 1.565-2.842zm1.334 20.121c-.464.29-1.044.406-1.682.406-2.841 0-6.378-2.32-9.857-5.798 1.681-1.798 3.305-3.828 4.928-6.089 2.726-.232 5.335-.638 7.77-1.218.29 1.044.464 2.088.638 3.132.812 4.928.174 8.465-1.797 9.567zM46.41 19.52c6.494 1.856 10.38 4.697 10.38 7.306 0 2.262-2.668 4.523-7.365 6.32-.928.348-1.971.696-3.015.986a60.951 60.951 0 00-2.841-7.306c1.16-2.493 2.145-4.929 2.84-7.306zM41.77 3.167c.638 0 1.16.116 1.682.406 1.913 1.102 2.609 4.581 1.797 9.568-.174.985-.406 2.03-.638 3.13a75.229 75.229 0 00-7.77-1.217 53.58 53.58 0 00-4.928-6.088c3.479-3.421 7.016-5.799 9.857-5.799zm-8.524 11.655c-1.043-.058-2.145-.058-3.247-.058-1.102 0-2.203 0-3.247.058 1.044-1.391 2.145-2.667 3.247-3.885a71.894 71.894 0 013.247 3.885zM16.606 3.573c.463-.29 1.043-.406 1.681-.406 2.841 0 6.379 2.32 9.858 5.799-1.682 1.797-3.305 3.827-4.93 6.088-2.724.232-5.334.638-7.77 1.218-.289-1.044-.463-2.088-.637-3.131-.812-4.929-.174-8.408 1.798-9.568zM13.59 34.131c-6.494-1.855-10.379-4.697-10.379-7.306 0-2.261 2.667-4.523 7.364-6.32a36.841 36.841 0 013.015-.986 60.938 60.938 0 002.842 7.306c-1.16 2.494-2.146 4.987-2.842 7.306zm1.218 6.379c.174-.986.406-2.03.638-3.132 2.435.522 5.045.928 7.77 1.218a53.579 53.579 0 004.929 6.089c-3.48 3.42-7.017 5.798-9.858 5.798-.638 0-1.16-.116-1.681-.406-1.972-1.102-2.61-4.639-1.798-9.567zM12.373 64.4c1.275-1.566 1.333-3.306.638-5.045-.696-1.74-2.146-2.552-3.943-2.61-2.146-.058-4.35 0-6.495 0h-.406v15.018h1.74v-5.682h2.725c.348 0 .638.116.812.406l3.48 5.392c.057.116.231.29.347.29h2.261a586.21 586.21 0 00-4.116-6.262c1.217-.174 2.26-.58 2.957-1.508zm-8.466-.117v-5.74h.638c1.333 0 2.725-.058 4.059.058 1.565.058 2.667 1.276 2.667 2.841 0 1.566-1.276 2.783-2.841 2.841-1.392.058-2.784 0-4.523 0zm22.44.754c-.928-4.059-4.639-5.103-7.48-3.827-2.203.986-3.19 2.9-3.247 5.277-.058 1.797.464 3.42 1.855 4.639 1.566 1.391 3.48 1.565 5.451 1.217 1.102-.232 2.087-.754 2.841-1.565-.29-.406-.58-.812-.87-1.16-1.623 1.392-3.42 1.856-5.392.928-1.276-.638-1.914-2.204-2.03-3.363h8.988v-.754c.058-.522 0-.986-.116-1.392zm-8.756.928c-.174-1.74 1.566-3.595 3.48-3.595 2.203-.058 3.595 1.276 3.652 3.595h-7.132zm17.802-5.045c-.87-.174-1.798-.232-2.668-.174-1.391.116-2.609.754-3.595 1.798.29.406.522.812.87 1.276.116-.117.232-.232.348-.29.928-.87 2.03-1.334 3.363-1.218 1.044.058 2.03.406 2.32 1.45.232.811.174 1.681.232 2.55-.174 0-.232-.057-.29-.115-1.392-1.16-2.958-1.392-4.64-.986-1.565.406-2.55 1.624-2.666 3.19-.117 1.797.695 3.13 2.26 3.768.987.406 2.088.406 3.132.174.812-.174 1.16-.638 2.32-1.275v.753h1.623c0-2.319.058-5.16 0-7.828 0-1.681-.986-2.725-2.61-3.073zm.812 7.306c-.058.174 0 .348 0 .522 0 1.218-.29 1.624-1.45 2.088-.812.29-1.682.406-2.551.116-.986-.29-1.682-1.16-1.682-2.146-.058-.986.58-1.971 1.566-2.261 1.333-.464 2.55-.174 3.653.638.348.29.58.58.464 1.043zm9.045-5.74c1.508-.464 2.9-.174 3.943 1.102l.174.115c.406-.347.754-.695 1.218-1.101-.174-.174-.232-.29-.348-.464-1.682-1.798-4.987-2.03-7.016-.58-2.842 2.088-2.784 6.146-1.392 8.292 1.334 2.03 3.247 2.725 5.509 2.435 1.333-.174 2.435-.811 3.305-1.913a20.9 20.9 0 01-1.218-1.102c-.116.116-.174.174-.232.29-1.565 1.74-4.175 1.566-5.566-.29-.812-1.102-.986-2.377-.754-3.653.116-1.45.87-2.61 2.377-3.131zm12.061 7.886a.718.718 0 00-.174.116c-.464.348-.928.406-1.45.232-.521-.232-.58-.696-.637-1.16v-6.61c0-.116 0 .116.058-.464h2.203v-1.74h-2.32v-2.899h-1.739v3.131h-1.508c-.115 0-.29.116-.29.232-.057.406 0 .696 0 1.276h1.856v7.422c0 .928.232 1.74 1.044 2.203.87.522 2.551.406 3.305-.232.116-.058.174-.29.174-.348-.174-.347-.348-.753-.522-1.16z"
      ></path>
    </svg>
  );
};

export { IconReact };
