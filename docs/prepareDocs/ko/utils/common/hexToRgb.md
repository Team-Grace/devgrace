# hexToRgb

16진수 색상 코드(Hex)를 RGB형식으로 변경하는 함수입니다. `(HEX -> RGB)`

유효한 Hex 코드가 아니라면 `null`을 반환합니다.

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
