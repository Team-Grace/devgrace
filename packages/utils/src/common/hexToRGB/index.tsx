import { repeatCharacters } from '../../string/repeatCharacters';

export const hexToRGB = (hex: string) => {
  const regex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  const HEXADECIMAL = 16;

  if (!regex.test(hex)) {
    return null;
  }

  hex = hex.replace('#', '');

  if (hex.length === 3) {
    hex = repeatCharacters(hex, 2);
  }

  const r = parseInt(hex.slice(0, 2), HEXADECIMAL);
  const g = parseInt(hex.slice(2, 4), HEXADECIMAL);
  const b = parseInt(hex.slice(4, 6), HEXADECIMAL);

  return { r, g, b } as const;
};
