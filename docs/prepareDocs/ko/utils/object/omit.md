# omit

인자로 넣은 `keys`를 생략한 객체를 반환하는 함수입니다.

반환된 객체는 `깊은 복사된 새로운 객체`입니다.

<br />

## Interface
```tsx
const omit: <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K | K[]
) => Omit<T, K>;
```

## Usage
```ts
import { omit } from '@devgrace/utils';

const omittedObj1 = omit({ a: 1, b: 2, c: 3 }, 'b'); // { a: 1, c: 3 }
const omittedObj1 = omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']); // { a: 1, c: 3 }
```