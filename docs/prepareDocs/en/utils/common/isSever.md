# isServer

Function to check if the JavaScript runtime environment is a `Server(Node.js)`.

If it returns `true`, it is a server environment.

```ts
import { isServer } from '@devgrace/utils'

if (isServer()) {
  /* server(Node.js) environment */
}
```