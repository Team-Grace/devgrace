# pick

A function that returns an object consisting of the `keys` given as arguments.

The returned object is `a new deeply copied object`.

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