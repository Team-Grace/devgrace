import { Arrayable } from '.';

describe('Nullable', () => {
  it('should allow the primitive type provided as a generic type, as well as an array of that primitive type.', () => {
    const test = ['123'] as Arrayable<string>;

    expectTypeOf(test).toEqualTypeOf<string | string[]>();
  });

  it('should allow narrowing of types to either a primitive type or an array type through a conditional expression.', () => {
    const test = ['123'] as Arrayable<string>;

    if (Array.isArray(test)) {
      expectTypeOf(test).toEqualTypeOf<string[]>();
    } else {
      expectTypeOf(test).toEqualTypeOf<string>();
    }
  });
});
