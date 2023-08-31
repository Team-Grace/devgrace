export const deepEqual = (a: any, b: any) => {
  // Compare primitive type values
  if (a === b) {
    return true;
  }

  // Returns false if either is not an object
  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // Compare Set Data Structures
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;

    for (const value of a) {
      if (!b.has(value)) return false;
    }
    return true;
  }

  // Compare Map Data Structures
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;

    for (const [key, value] of a) {
      if (!b.has(key) || !deepEqual(value, b.get(key))) {
        return false;
      }
    }
    return true;
  }

  // Compare keys or lengths of objects or arrays
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare each property based on a key
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};
