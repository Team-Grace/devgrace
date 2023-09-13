import { useCallback, useEffect, useRef } from 'react';

export const usePreservedCallback = <T extends (...args: any[]) => any>(
  callback: T
) => {
  const callbackRef = useRef<T>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: any[]) => {
    callbackRef.current(args.length === 1 ? args[0] : args);
  }, []);
};
