# isClient

Function to check if the JavaScript runtime environment is the `Client(browser)`.

If it returns `true`, it is a client environment.

<br />

## Interface
```tsx
const isClient: () => boolean
```

## Example
```ts
import { isClient } from '@devgrace/utils';

if (isClient()) {
  /* client environment */
}
```