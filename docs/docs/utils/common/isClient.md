# isClient

Function to check if the JavaScript runtime environment is the `Client(browser)`.

If it returns `true`, it is a client environment.

```ts
import { isClient } from '@devgrace/utils'

if (isClient()) {
  /* client environment */
}
```