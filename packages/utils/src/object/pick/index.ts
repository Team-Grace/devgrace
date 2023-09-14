import { deepCopy } from '../../common/deepCopy';
import { wrapInArray } from '../../common/wrapInArray';

export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K | K[]
): Pick<T, K> => {
  const result = {} as T;
  const wrappedInArrayKeys = wrapInArray(keys);

  wrappedInArrayKeys.forEach((key) => {
    if (key in obj) {
      result[key] = deepCopy(obj[key]);
    }
  });

  return result;
};
