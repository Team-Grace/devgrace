# objectKeys

a function that works the same as `Object.keys()`, but protects the key type.

Note that the symbol property is excluded because it is not an enumeration.

<br />

## Interface
```tsx
type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<
  keyof T,
  symbol
>;
type ObjectValues<T extends Record<PropertyKey, T[keyof T]>> =
  T[keyof T];

const objectKeys: <T extends Record<PropertyKey, ObjectValues<T>>>(
  obj: T
) => ObjectKeys<T>[];
```

## Usage
```ts
import { objectKeys } from '@devgrace/utils';

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

 /**
  * type: ("a" | "b" | "c")[]
  * value: ["a", "b", "c"]
  */
const keys = objectKeys(obj);
```

## Note
[Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)