import { useMemo } from "react";
import type { FC } from "react";
import { Box } from "@components/atoms";
import { useWindowSize } from "@hooks/index";
import { getNumberOfCells } from "./index.helpers";
import { CELL_SIZE } from "./index.constants";

const WelcomeBackground: FC = () => {
  const { width, height } = useWindowSize();
  const cellY = useMemo(() => getNumberOfCells(height, CELL_SIZE), [height]);
  const cellX = useMemo(() => getNumberOfCells(width, CELL_SIZE), [width]);
  return (
    <Box.Wrapper
      className={"w-screen h-screen grid fixed -z-10"}
      style={{
        gridTemplateColumns: `repeat(${cellX}, 1fr)`,
        gridTemplateRows: `repeat(${cellY}, 1fr)`,
      }}
    >
      {[...Array(cellX * cellY)].map((_, index) => (
        <Box
          className="w-full h-full bg-black relative transition duration-400 delay-200 ease-out z-10 hover:bg-primary hover:z-20 hover:duration-0 hover:delay-18 hover:shadow"
          key={index}
        />
      ))}
    </Box.Wrapper>
  );
};

export { WelcomeBackground };
