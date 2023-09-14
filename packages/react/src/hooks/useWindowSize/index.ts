import React, { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@devgrace/react';
import { useDebounce } from '@devgrace/react';

interface Size {
  width: number | null;
  height: number | null;
}

interface useWindowSizeProps {
  isDebounce?: boolean;
  wait?: number;
}

export const useWindowSize = (options: useWindowSizeProps = {}) => {
  const { isDebounce = false, wait = 300 } = options;
  const [windowSize, setWindowSize] = useState<Size>({
    width: null,
    height: null,
  });

  const onResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const debouncedResize = useDebounce(onResize, wait);
  const handleResize = isDebounce ? debouncedResize : onResize;

  useIsomorphicLayoutEffect(() => {
    onResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
