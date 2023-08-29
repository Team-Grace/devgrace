# formatPhoneNumber

`문자열`을 입력하면 `핸드폰 번호 포맷`으로 `-(hyphen)`을 넣어서 반환해주는 함수입니다.

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