import { useCallback, useState, useEffect } from 'react';

type Size = {
  width: number;
  height: number;
};

function useWindowSize(): Size {
  const [size, setSize] = useState<Size>({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });
  const handleSize = useCallback(() => {
    setSize({
      width: window?.innerWidth || 0,
      height: window?.innerHeight || 0,
    });
  }, [window?.innerHeight, window?.innerWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [window?.innerHeight, window?.innerWidth]);

  return size;
}

export { useWindowSize };
