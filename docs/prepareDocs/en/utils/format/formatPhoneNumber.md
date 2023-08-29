# formatPhoneNumber

A function that takes a `string` and returns it in `phone number format` with a - hyphen.

<br />

## Interface
```tsx
const formatPhoneNumber: (value: string) => string
```

## Example
```ts
import { formatPhoneNumber } from '@devgrace/utils';

const phoneNumber1 = formatPhoneNumber("01012345678"); // 010-1234-5678
const phoneNumber2 = formatPhoneNumber("021231234"); // 02-123-1234
```