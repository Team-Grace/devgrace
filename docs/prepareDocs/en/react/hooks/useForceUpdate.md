# useForceUpdate

Executing the returned function will force the component to `re-render`.

<br />

## Interface
```tsx
// type DispatchWithoutAction = () => void;
const useForceUpdate: () => React.DispatchWithoutAction
```

## Example

```tsx
import { useForceUpdate } from '@devgrace/react';

const Example = () => {
  const forceUpdate = useForceUpdate();
  
  const handleForceUpdate = useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);

  return (
    <div>
      <button onClick={handleForceUpdate}>Button</button>;
    </div>
  );
};
```

## Note
https://github.com/streamich/react-use/pull/837