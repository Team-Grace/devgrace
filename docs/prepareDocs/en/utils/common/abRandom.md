# abRandom

Function that returns `0` or `1` with 50% probability.
This can be utilized when doing an `AB testing`.


<br />

## Interface
```tsx
const abRandom: () => 0 | 1
```

## Example
```ts
import { abRandom } from '@devgrace/utils';

const ab = abRandom();
```