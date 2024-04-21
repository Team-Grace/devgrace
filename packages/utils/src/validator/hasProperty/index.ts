export const hasProperty = <T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): key is K & keyof T => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
