# getViewportSize

Returns the current `Viewport Size`.
In a server environment, it returns `{ width: 0, height: 0}`.

<br />

## Interface
```tsx
const getViewportSize: () => {
  readonly width: number;
  readonly height: number;
}
```

## Example
```ts
import { getViewportSize } from '@devgrace/utils';

const { width, height } = getViewportSize();
```