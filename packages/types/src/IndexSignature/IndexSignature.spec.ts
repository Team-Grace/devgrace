import { describe, expectTypeOf, it } from 'vitest';
import { IndexSignature } from '.';

describe('IndexSignature', () => {
  it('should allow dynamically adding properties that an object can have. The type of the value is the type provided as a generic.', () => {
    const test: IndexSignature<string> = { foo: 'foo', bar: 'bar' };
    test.test = '1';

    expectTypeOf(test).toEqualTypeOf<{ [key: PropertyKey]: string }>();
  });
});
