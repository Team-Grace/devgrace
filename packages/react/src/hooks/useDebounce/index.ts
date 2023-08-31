import { useMemo } from 'react';
import debounce from 'lodash.debounce';
import { useUnmount } from '../useUnMount';

export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  wait: number,
  options: Parameters<typeof debounce>[2] = {}
) => {
  const debounced = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useUnmount(() => debounced.cancel());

  return debounced;
};
