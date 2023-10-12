# objectEntries

a function that works the same as `Object.entries()`, but protects the key type.

<br />

## Interface
```tsx
type ObjectKeys<T> = keyof T;
type ObjectValues<T> = T[keyof T];

const objectEntries: <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
) => [ObjectKeys<T>, ObjectValues<T>][];
```

## Usage
```ts
import { objectEntries } from '@devgrace/utils';

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

 /**
  * type: ["a" | "b" | "c", 1 | 2 | 3][]
  * value: 
    [
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]
  */
const entries = objectEntries(obj);
```

## Note
[Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)