# useDebounce
A custom hook that makes it easy to use `debounce`.

<br />

## Interface
```tsx
// lodash-es DebounceSettings
// https://www.geeksforgeeks.org/lodash-_-debounce-method/
interface DebounceSettings {
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}

const useDebounce: <T extends (...args: any[]) => any>(
  callback: T, 
  wait: number, 
  options?: DebounceSettings
) => DebouncedFunc<T>
```

## Example

```tsx
import { useDebounce } from '@devgrace/react';

const Example = () => {
  const handle = useDebounce(() => {
    console.log('debounce');
  }, 500);

  return <button onClick={handle}>button1</button>;
};