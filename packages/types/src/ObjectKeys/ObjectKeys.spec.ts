import { describe, expectTypeOf, it } from 'vitest';
import { ObjectKeys } from '.';

describe('ObjectKeys', () => {
  it('Should clarify the return type of Object.keys, excluding symbols.', () => {
    const test = {
      foo: 'foo',
      bar: 'bar',
    } as const;

    const defaultKeys = Object.keys(test);
    const AppliedKeys = Object.keys(test) as ObjectKeys<typeof test>[];

    expectTypeOf(defaultKeys).toEqualTypeOf<string[]>();
    expectTypeOf(AppliedKeys).toEqualTypeOf<('foo' | 'bar')[]>();
  });
});
