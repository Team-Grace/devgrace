# isPromise

a function that checks if the given argument is a `Promise`. If it is a Promise, it narrows down the type.

<br />

## Interface
```tsx title="typescript"
const isPromise: <T = any>(value: any) => value is Promise<T>
```

## Usage
```ts
import { isPromise } from '@devgrace/utils';

isPromise(Promise.resolve()); // true

isPromise(() => {}); // false
isPromise('123'); // false
isPromise(true); // false
isPromise({}); // false
isPromise(null); // false
```
