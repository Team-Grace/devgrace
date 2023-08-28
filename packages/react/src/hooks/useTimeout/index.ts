import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const handleTimeout = () => {
      savedCallback.current();
    };

    const timeoutId = window.setTimeout(handleTimeout, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);
};
