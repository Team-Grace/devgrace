export const deleteFalsyProperties = <T extends Record<PropertyKey, any>>(
  obj: T
): T => {
  const copiedObj: Record<PropertyKey, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value !== null && typeof value === 'object') {
        if (Array.isArray(value)) {
          const newArray = value.reduce((acc: any[], cur: any) => {
            if (typeof cur !== 'object') {
              acc.push(cur);
              return acc;
            }
            const property = deleteFalsyProperties(cur);
            const isEmptyObj = !!Object.keys(property).length;

            if (isEmptyObj) {
              acc.push(property);
            }
            return acc;
          }, []);

          if (newArray.length) {
            copiedObj[key] = newArray;
          }
        } else {
          const newObj = deleteFalsyProperties(value);

          if (Object.keys(newObj).length) {
            copiedObj[key] = newObj;
          }
        }
      } else if (typeof value === 'boolean' || value) {
        copiedObj[key] = value;
      }
    }
  }

  return copiedObj;
};
