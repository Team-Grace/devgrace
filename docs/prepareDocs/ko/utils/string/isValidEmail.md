# isValidEmail

주어진 문자열이 이메일 형식을 준수하는지 확인하는 함수입니다.

<br />

## Interface
```tsx
const isValidEmail: (email: string) => void
```

## Usage
```ts
import { isValidEmail } from '@devgrace/utils';

const email1 = "example@email.com"; // true
const email2 = "invalid-email"; // false
```