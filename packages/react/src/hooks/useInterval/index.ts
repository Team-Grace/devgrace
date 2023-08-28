import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

export const useInterval = (callback: () => void, delay = 0) => {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useIsomorphicLayoutEffect(() => {
    const handleInterval = () => {
      savedCallback.current();
    };

    const intervalId = window.setInterval(handleInterval, delay);

    return () => clearInterval(intervalId);
  }, [delay]);
};
