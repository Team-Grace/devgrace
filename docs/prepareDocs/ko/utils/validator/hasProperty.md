# hasProperty

Function that returns a `boolean` indicating whether the object contains the specified property. If true, the type of the property is narrowed down.

<br />

## Interface
```tsx title="typescript"
const hasProperty: <T extends Record<PropertyKey, any>, K extends PropertyKey>(
  obj: T,
  key: K
) => key is K & keyof T;
```

## Usage
```ts
import { hasProperty } from '@devgrace/utils';

const exampleObj = { foo: 'foo', bar: 'bar' } as const;

const exampleKey1 = 'foo' as string;
const exampleKey2 = 'zoo' as string;

hasProperty(exampleObj, exampleKey1); // true
// const exampleKey1: "foo" | "bar"
hasProperty(exampleObj, exampleKey2); // false
// const exampleKey2: string
```
