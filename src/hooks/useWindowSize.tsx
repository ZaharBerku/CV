import { useCallback, useState, useEffect } from "react";

type Size = {
  cellX: number;
  cellY: number;
};

export const getNumberOfCells = (size: number, sizeCell: number) => Math.floor(size / sizeCell);

function useWindowSize(sizeCell: number): Size {
  const [cell, setCell] = useState<Size>({
    cellX: getNumberOfCells(window?.innerWidth, sizeCell),
    cellY: getNumberOfCells(window?.innerHeight, sizeCell),
  });
  const handleSize = useCallback(() => {
    setCell({
      cellX: getNumberOfCells(window?.innerWidth || 0, sizeCell),
      cellY: getNumberOfCells(window?.innerHeight || 0, sizeCell),
    });
  }, [window?.innerHeight, window?.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [window?.innerHeight, window?.innerWidth]);

  return cell;
}

export { useWindowSize };
