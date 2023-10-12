import { objectEntries } from '.';

describe('objectEntries', () => {
  it('should behave identical to Object.entries()', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    } as const;

    /**
     * const entries: ["a" | "b" | "c", ObjectValues<{
        readonly a: 1;
        readonly b: 2;
        readonly c: 3;
      }>][]
     */
    const entries = objectEntries(obj);

    expect(entries).toStrictEqual(Object.entries(obj));
    expect(entries).toStrictEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
