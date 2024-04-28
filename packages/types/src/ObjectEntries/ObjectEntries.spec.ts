import { ObjectEntries } from '.';

describe('ObjectEntries', () => {
  it('should clarify the return type of Object.entries, excluding symbols.', () => {
    const test = {
      foo: 'foo',
      bar: 'bar',
    } as const;

    const defaultEntries = Object.entries(test);
    const AppliedEntries = Object.entries(test) as ObjectEntries<typeof test>;

    expectTypeOf(defaultEntries).toEqualTypeOf<[string, 'foo' | 'bar'][]>();
    expectTypeOf(AppliedEntries).toEqualTypeOf<
      ['foo' | 'bar', 'foo' | 'bar'][]
    >();
  });
});
