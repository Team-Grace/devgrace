# deepEqual

인자로 주어진 두 값을 `깊은 비교`해서 같은지 다른지 여부를 반환해주는 함수입니다.

<br />

## Interface
```tsx
const deepEqual: (a: any, b: any) => boolean
```

## Usage
```ts
import { deepEqual } from '@devgrace/utils';

const isEqual1 = deepEqual(1, 1); // true
const isEqual1 = deepEqual({ a: 1}, { a: 1}); // true
const isEqual2 = deepEqual([1, 2, 3] [1, 2, 3]); // true

const isEqual2 = deepEqual("1", "2"); // false
const isEqual3 = deepEqual({ a: 1}, { a: 2}); // false
const isEqual3 = deepEqual([1, 2, 3], [1, "2", 3]); // false
```