# pick

인자로 넣은 `keys`로 구성된 객체를 반환하는 함수입니다.

반환된 객체는 `깊은 복사된 새로운 객체`입니다.

<br />

## Interface
```tsx
const pick: <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K | K[]
) => Pick<T, K>;
```

## Usage
```ts
import { pick } from '@devgrace/utils';

const pickedObj1 = pick({ a: 1, b: 2, c: 3 }, 'b'); // { b: 2 }
const pickedObj2 = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }
```