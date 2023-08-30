# noop

A function that does nothing and returns `undefined`.

<br />

## Interface
```tsx
const noop: () => void
```

## Example
```ts
import { noop } from '@devgrace/utils';

const handleClick = (callback = noop) => {
  callback();
};
```