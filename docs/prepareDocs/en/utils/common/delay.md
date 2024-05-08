# delay

A function that allows you to wait a given amount of time before performing the next action.

If you use `setTimeout` to define an action after a certain amount of time, and a Promise exists after the function that needs to happen after that time, then the setTimeout will belong to the `macroTaskQueue` and the Promise will belong to the `microTaskQueue`, which may not guarantee that the actions will happen in order as intended. 

Using the `delay` function can solve this problem.

<br />

## Interface
```tsx
const delay: (time: number) => Promise<void>
```

## Usage
```ts
import { delay } from '@devgrace/utils';

const something = () => Promise.resolve();

const doSomethingAfterDelay = async () => {
  await delay(1000);
  await something();
};
```