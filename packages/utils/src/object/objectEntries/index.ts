import { ObjectEntries } from '@devgrace/types';

export const objectEntries = <T extends Record<PropertyKey, T[keyof T]>>(
  obj: T
): ObjectEntries<T> => {
  return Object.entries(obj) as ObjectEntries<T>;
};
