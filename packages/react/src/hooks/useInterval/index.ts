import { useRef, useEffect } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const handleInterval = () => {
      savedCallback.current();
    };

    const intervalId = window.setInterval(handleInterval, delay);

    return () => clearInterval(intervalId);
  }, [delay]);
};
