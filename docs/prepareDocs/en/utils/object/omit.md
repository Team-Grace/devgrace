# omit

a function that returns an object omitting the `keys` given as arguments.

The returned object is `a new deeply copied object`.

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