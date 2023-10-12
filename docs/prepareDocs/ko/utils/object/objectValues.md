# objectValues

`Object.values()`와 동일하게 동작하는 함수입니다.

<br />

## Interface
```tsx
type ObjectValues<T> = T[keyof T];

const objectValues: <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
) => ObjectValues<T>[];
```

## Usage
```ts
import { objectValues } from '@devgrace/utils';

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

 /**
  * type: (1 | 2 | 3)[]
  * value: [1, 2, 3]
  */
const values = objectValues(obj);
```

## Note
[Object.values()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values)