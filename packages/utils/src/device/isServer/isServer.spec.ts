import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { isServer } from '.';

let windowSpy: any;

beforeEach(() => {
  windowSpy = vi.spyOn(window, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe('isServer', () => {
  it('should return "false" in client environment', () => {
    windowSpy.mockImplementation(() => ({}));

    expect(isServer()).toBe(false);
  });

  it('should return "true" in client environment', () => {
    windowSpy.mockImplementation(() => undefined);

    expect(isServer()).toBe(true);
  });
});
