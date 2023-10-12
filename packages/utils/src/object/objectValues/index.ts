import { ObjectValues } from '../types';

export const objectValues = <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
): Array<ObjectValues<T>> => {
  return Object.values(obj);
};
