# useTimeout

A custom hook to conveniently use `window.setTimeout`.

<br />

## Interface
```tsx
const useTimeout: (callback: () => void, delay?: number) => void
```

<br />

## Example

```tsx
import { useTimeout } from '@devgrace/react'

const Example = () => {
  const [number, setNumber] = useState(0);

  useTimeout(() => {
    setNumber(number + 1)
  }, 1000);

  useTimeout(() => {
    setNumber(number + 1)
  }, 2000);

  return <div>{number}</div>;
};
```