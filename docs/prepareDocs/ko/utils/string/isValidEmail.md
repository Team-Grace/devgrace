# isValidEmail

주어진 문자열이 이메일 형식을 준수하는지 확인하는 함수입니다.

<br />

## Interface
```tsx
const isValidEmail: (email: string) => boolean
```

## Usage
```ts
import { isValidEmail } from '@devgrace/utils';

const email1 = isValidEmail('example@email.com'); // true
const email2 = isValidEmail('invalid-email'); // false
```