import { describe, expectTypeOf, it } from 'vitest';
import { ExcludeNullish } from '.';

describe('ExcludeNullish', () => {
  it('should exclude null and undefined from the type provided as a generic.', () => {
    const test = '123' as ExcludeNullish<string | null | undefined>;

    expectTypeOf(test).toEqualTypeOf<string>();
  });
});
