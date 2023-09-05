# isValidEmail

A function that checks whether a given string conforms to the email format.

<br />

## Interface
```tsx
const isValidEmail: (email: string) => void
```

## Usage
```ts
import { isValidEmail } from '@devgrace/utils';

const email1 = "example@email.com"; // true
const email2 = "invalid-email"; // false
```