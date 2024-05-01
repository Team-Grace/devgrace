# delay

This function allows you to perform an action after a specified amount of time. 

When you use `setTimeout` to define an action to occur after a certain time, if there is `Promise` following the function that should act after the delay, `setTimeout` will fall into the `macroTaskQueue` and `Promise` will be in the `microTaskQueue`. This configuration may prevent the actions from executing in the intended order. 

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