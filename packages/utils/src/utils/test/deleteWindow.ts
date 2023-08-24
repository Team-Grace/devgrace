export const deleteWindow = () => {
  Object.defineProperty(global, 'window', {
    value: undefined,
  });
};
