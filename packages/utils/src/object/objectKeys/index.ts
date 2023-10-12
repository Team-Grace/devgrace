import { ObjectKeys, ObjectValues } from '../types';

export const objectKeys = <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
): ObjectKeys<T>[] => {
  return Object.keys(obj);
};
