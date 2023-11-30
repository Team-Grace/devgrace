export const deleteEmptyProperties = <T extends Record<PropertyKey, any>>(
  obj: T
): T => {
  const copiedObj: Record<PropertyKey, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value !== null && typeof value === 'object') {
        // object
        if (!Array.isArray(value)) {
          const newObj = deleteEmptyProperties(value);

          if (Object.keys(newObj).length) {
            copiedObj[key] = newObj;
          }
          continue;
        }
        // array
        const newArray = value.reduce((acc: any[], cur: any) => {
          if (typeof cur !== 'object') {
            acc.push(cur);
            return acc;
          }
          const property = deleteEmptyProperties(cur);
          const isNonEmptyObj = !!Object.keys(property).length;

          if (isNonEmptyObj) acc.push(property);
          return acc;
        }, []);

        if (newArray.length) {
          copiedObj[key] = newArray;
        }
      } else if (
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        value
      ) {
        copiedObj[key] = value;
      }
    }
  }

  return copiedObj;
};
