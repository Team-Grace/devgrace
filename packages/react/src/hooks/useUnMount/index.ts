import { useEffect, useRef } from 'react';

export const useUnmount = (callback: () => any) => {
  const callbackRef = useRef(callback);

  // update the ref each render so if it change the newest callback will be invoked
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => () => callbackRef.current(), []);
};
