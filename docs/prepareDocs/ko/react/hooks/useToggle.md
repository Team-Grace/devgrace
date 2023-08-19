# useToggle

boolean 타입의 state를 Toggle로 쉽게 사용할 수 있는 hook 입니다.

## Example

```tsx
import { useToggle } from '@devgrace/react'

const Example = () => {
  const [bool, toggle] = useToggle(false);

  return (
    <div>
      {bool && <p>render</p>}
      <button onClick={toggle}>Toggle Button</button>
    </div>
  );
}
```