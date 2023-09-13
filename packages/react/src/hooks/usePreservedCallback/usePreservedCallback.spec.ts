import React from 'react';
import { renderHook } from '@testing-library/react';
import { usePreservedCallback } from '.';

describe('usePreservedCallback', () => {
  it('should preserve and execute the callback', async () => {
    let count = 0;

    const increment = () => {
      count += 1;
    };

    const newIncrement = () => {
      count += 10;
    };

    const { result } = renderHook(() => usePreservedCallback(increment));

    expect(count).toBe(0);

    result.current();
    expect(count).toBe(1);

    result.current();
    expect(count).toBe(2);

    result.current = newIncrement; // change

    result.current();
    expect(count).toBe(12);

    result.current();
    expect(count).toBe(22);
  });
});
