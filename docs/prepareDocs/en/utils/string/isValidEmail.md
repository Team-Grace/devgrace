# isValidEmail

A function that checks whether a given string conforms to the email format.

<br />

## Interface
```tsx
const isValidEmail: (email: string) => boolean
```

## Usage
```ts
import { isValidEmail } from '@devgrace/utils';

const email1 = isValidEmail("example@email.com"); // true
const email2 = isValidEmail("invalid-email"); // false
```