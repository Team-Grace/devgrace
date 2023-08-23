# getUniqTime

Function that returns the value `new Date().getTime()` by default, but returns a unique value if called multiple times at the same time.


<br />

## Interface
```tsx
const getUniqTime: () => number
```

## Example
```ts
import { getUniqTime } from '@devgrace/utils';

const uniqTime = getUniqTime();
```