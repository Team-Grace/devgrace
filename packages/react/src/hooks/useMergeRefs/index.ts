import { MutableRefObject, useCallback, RefCallback, LegacyRef } from 'react';

export const useMergeRefs = <T = any>(
  ...refs: (MutableRefObject<T> | LegacyRef<T>)[]
): RefCallback<T> => {
  return useCallback(
    (value: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          (ref as MutableRefObject<T>).current = value;
        }
      });
    },
    [...refs]
  );
};
