import { ObjectKeys, ObjectValues } from '../types';

export const objectEntries = <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
): Array<[ObjectKeys<T>, ObjectValues<T>]> => {
  return Object.entries(obj);
};
