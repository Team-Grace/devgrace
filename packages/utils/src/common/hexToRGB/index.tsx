import { repeatCharacters } from '../../string/repeatCharacters';

export const hexToRGB = (hex: string) => {
  const regex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  const HEXADECIMAL = 16;

  if (!regex.test(hex)) {
    return null;
  }

  let convertedHex = hex.replace('#', '');

  if (convertedHex.length === 3) {
    convertedHex = repeatCharacters(hex, 2);
  }

  const r = parseInt(convertedHex.slice(0, 2), HEXADECIMAL);
  const g = parseInt(convertedHex.slice(2, 4), HEXADECIMAL);
  const b = parseInt(convertedHex.slice(4, 6), HEXADECIMAL);

  return { r, g, b } as const;
};
