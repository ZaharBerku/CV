import type { FC } from "react";
import { Box } from "@components/atoms";
import { TypedText, MyInfo } from "@components/molecules";

const MySection: FC = () => {
  return (
    <Box.Container className="flex-wrapper-column p-16">
      <TypedText />
      <MyInfo />
    </Box.Container>
  );
};

export { MySection };
