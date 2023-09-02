# deepEqual

A function that performs a `deep comparison` between two values given as arguments and returns whether they are the same or different.

<br />

## Interface
```tsx
const deepEqual: (source: any, target: any) => boolean
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