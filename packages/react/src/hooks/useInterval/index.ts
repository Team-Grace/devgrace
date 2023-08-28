import { useRef, useEffect } from 'react';

export const useInterval = (callback: () => void, delay = 0) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleInterval = () => {
      savedCallback.current();
    };

    const intervalId = window.setInterval(handleInterval, delay);

    return () => clearInterval(intervalId);
  }, [delay]);
};
