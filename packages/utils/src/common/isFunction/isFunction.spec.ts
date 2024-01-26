import { isFunction } from '.';

describe('isFunction', () => {
  it('should return true for functions and false for other values', () => {
    function example() {}

    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction(example)).toBeTruthy();

    expect(isFunction('123')).toBeFalsy();
    expect(isFunction(123)).toBeFalsy();
    expect(isFunction({})).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
  });
});
