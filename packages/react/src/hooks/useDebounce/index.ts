import { useMemo } from 'react';
import debounce from 'lodash.debounce';
import { useUnmount } from '../useUnMount';

export type DebounceParameters = Parameters<typeof debounce>;

export const useDebounce = (
  callback: DebounceParameters[0],
  wait: DebounceParameters[1],
  options: DebounceParameters[2] = {}
) => {
  const debounced = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useUnmount(() => debounced.cancel());

  return debounced;
};
