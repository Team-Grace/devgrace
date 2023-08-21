# useTimeout

A custom hook to conveniently use `window.setTimeout`.

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