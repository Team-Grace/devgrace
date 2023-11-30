import { mergeProperties } from '.';

describe('mergeProperties', () => {
  it('', () => {
    const target = {
      a: 1,
      b: 2,
    };
    const source = {
      c: 3,
      d: 4,
    };
    const expectedObj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };

    expect(mergeProperties(target, source)).toEqual(expectedObj);
  });

  it('', () => {
    const target = {
      a: 1,
      b: 2,
      c: {
        c_a: 1,
        c_b: 2,
      },
      d: 4,
      e: [1, 2],
      f: {
        f_a: [1, 2],
      },
    };
    const source = {
      c: {
        c_c: 3,
        c_d: 4,
      },
      d: 5,
      e: [3, 4],
      f: {
        f_a: [3, 4],
      },
    };
    const expectedObj = {
      a: 1,
      b: 2,
      c: {
        c_a: 1,
        c_b: 2,
        c_c: 3,
        c_d: 4,
      },
      d: 5,
      e: [1, 2, 3, 4],
      f: {
        f_a: [1, 2, 3, 4],
      },
    };

    expect(mergeProperties(target, source)).toEqual(expectedObj);
  });
});
