import { ObjectKeys } from '@devgrace/types';

export const objectValues = <T extends Record<PropertyKey, T[keyof T]>>(
  obj: T
): T[ObjectKeys<T>][] => {
  return Object.values(obj) as T[ObjectKeys<T>][];
};
