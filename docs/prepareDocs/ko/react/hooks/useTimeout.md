# useTimeout

`window.setTimeout`을 편리하게 사용할 수 있는 커스텀 훅 입니다. 

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