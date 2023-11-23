import { isClient } from '.';
import { deleteWindow } from '@devgrace/test';

describe('isClient', () => {
  it('should return "true" in client environment', () => {
    expect(isClient()).toBe(true);
  });

  it('should return "false" in server environment', () => {
    deleteWindow();

    expect(isClient()).toBe(false);
  });
});
