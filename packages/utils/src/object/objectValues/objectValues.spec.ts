import { objectValues } from '.';

describe('objectValues', () => {
  it('should behave identical to Object.values()', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    } as const;

    const values = objectValues(obj); // type: (1 | 2 | 3)[]

    expect(values).toEqual(Object.values(obj));
    expect(values).toEqual([1, 2, 3]);
  });
});
