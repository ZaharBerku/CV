import type { FC } from "react";
import { Box } from "@components/atoms";
import { TypedText } from "@components/molecules";

const MySection: FC = () => {
  return (
    <Box.Container>
      <TypedText />
    </Box.Container>
  );
};

export { MySection };
