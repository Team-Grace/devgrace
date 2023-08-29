export const formatPhoneNumber = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
};
