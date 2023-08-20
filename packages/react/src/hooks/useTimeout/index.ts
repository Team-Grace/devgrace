import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay = 0) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleTimeout = () => {
      savedCallback.current();
    };

    const timeoutId = window.setTimeout(handleTimeout, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);
};
