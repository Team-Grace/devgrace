import { deepEqual } from '.';

describe('deepEqual', () => {
  it('', () => {
    // primitive type
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('a', 'a')).toBe(true);

    // object & array
    expect(deepEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
    expect(
      deepEqual(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]
      )
    ).toBe(true);

    // null & undefined
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);

    // Set & Map
    expect(deepEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
    expect(
      deepEqual(
        new Map([
          [0, 'a'],
          [1, 'b'],
        ]),
        new Map([
          [0, 'a'],
          [1, 'b'],
        ])
      )
    ).toBe(true);
  });

  it('', () => {
    // primitive type
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('a', 'b')).toBe(false);

    // object & array
    expect(deepEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 2 } })).toBe(false);
    expect(
      deepEqual(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        [
          [1, 2, 3],
          [4, '5', 6],
          [7, 8, 9],
        ]
      )
    ).toBe(false);

    // null & undefined
    expect(deepEqual(null, undefined)).toBe(false);

    // Set & Map
    expect(deepEqual(new Set([1, 2, 3]), new Set([1, 2, 4]))).toBe(false);
    expect(
      deepEqual(
        new Map([
          [0, 'a'],
          [1, 'b'],
        ]),
        new Map([
          [0, 'a'],
          [1, 'c'],
        ])
      )
    ).toBe(false);
  });
});
