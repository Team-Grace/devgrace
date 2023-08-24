# getViewportSize

현재 `Viewport Size`를 반환합니다.
서버 환경에서는 `{ width: 0, height: 0} `을 반환한다.

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