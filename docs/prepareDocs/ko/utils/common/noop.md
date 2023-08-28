# noop

아무 동작 하지 않고, `undefined`를 반환하는 함수입니다.

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