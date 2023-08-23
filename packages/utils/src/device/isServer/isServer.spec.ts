import { isServer } from ".";

const deleteWindow = () => {
  Object.defineProperty(global, 'window', {
    value: undefined,
  });
};

describe('isServer', () => {
  it('should return "false" in client environment', () => {
    expect(isServer()).toBe(false)
  })
  
  it('should return "true" in client environment', () => {
    deleteWindow();

    expect(isServer()).toBe(true)
  })
})