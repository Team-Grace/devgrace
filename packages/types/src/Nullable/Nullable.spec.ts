import { Nullable } from '.';

describe('Nullable', () => {
  it('should allow the type provided as a generic type, along with null and undefined.', () => {
    const test = '123' as Nullable<string>;

    expectTypeOf(test).toEqualTypeOf<string | null>();
  });

  it('should narrow the type to the generic type when narrowed by a conditional expression.', () => {
    const test = '123' as Nullable<string>;

    if (test) {
      expectTypeOf(test).toEqualTypeOf<string>();
    }
  });
});
