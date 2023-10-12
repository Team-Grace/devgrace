import { objectKeys } from '.';

describe('objectKeys', () => {
  it('should behave identical to Object.Keys()', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    } as const;

    const keys = objectKeys(obj); // ("a" | "b" | "c")[]

    expect(keys).toEqual(Object.keys(obj));
    expect(keys).toEqual(['a', 'b', 'c']);
  });
});
