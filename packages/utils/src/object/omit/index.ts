import { deepCopy } from '../../common/deepCopy';
import { wrapInArray } from '../../common/wrapInArray';

export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K | K[]
): Omit<T, K> => {
  const result = deepCopy(obj);
  const wrappedInArrayKeys = wrapInArray(keys);

  wrappedInArrayKeys.forEach((key) => {
    if (key in result) {
      delete result[key];
    }
  });

  return result;
};
