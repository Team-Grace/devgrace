import { useMemo } from 'react';
import { DebounceSettings, debounce } from 'lodash-es';
import { useUnmount } from '../useUnMount';

export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  wait: number,
  options?: DebounceSettings
) => {
  const debounced = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useUnmount(() => debounced.cancel());

  return debounced;
};
