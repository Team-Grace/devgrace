import { ObjectKeys, ObjectValues } from '../types';

export const objectKeys = <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
): Array<ObjectKeys<T>> => {
  return Object.keys(obj);
};
