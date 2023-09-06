# hexToRgb

a function to change a hexadecimal color code (Hex) to RGB format. (HEX -> RGB)

<br />

## Interface
```tsx
const hexToRgb: (hex: string) => {
  readonly r: number;
  readonly g: number;
  readonly b: number;
} | null
```

## Usage
```ts
import { hexToRgb } from '@devgrace/utils';

const hex1 = '#1A2B3C';
const rgbColor1 = hexToRgb(hex1); // { r: 26, g: 43, b: 60 }

const hex2 = '#1A2';
const rgbColor2 = hexToRgb(hex2); // { r: 17, g: 170, b: 34 }
```

## Note
