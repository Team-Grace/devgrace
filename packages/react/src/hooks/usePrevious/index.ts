import { useEffect, useRef } from 'react'

export const usePrevious = (value: string) => {
  const ref = useRef<string>();
  const previousValue = ref.current;

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return previousValue;
};