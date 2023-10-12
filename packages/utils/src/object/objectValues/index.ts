import { ObjectValues } from '../types';

export const objectValues = <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
): ObjectValues<T>[] => {
  return Object.values(obj);
};
