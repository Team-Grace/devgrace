import { act, render, renderHook, screen } from '@testing-library/react';
import { useTimeout } from '.';
import { useState } from 'react';

beforeAll(() => {
  jest.useFakeTimers();
});

const TestComponent = () => {
  const [number, setNumber] = useState(0);

  useTimeout(() => {
    act(() => setNumber(number + 1));
  }, 1000);

  useTimeout(() => {
    act(() => setNumber(number + 1));
  }, 2000);

  return <div>{number}</div>;
};

describe('useTimeout', () => {
  it('mockFn is executed after a given time', () => {
    const mockFn = jest.fn();

    renderHook(() => useTimeout(mockFn, 2000));

    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(2000);

    expect(mockFn).toBeCalled();
  });

  it('callback function always guarantees the latest state', () => {
    render(<TestComponent />);

    expect(screen.getByText('0')).toBeInTheDocument();

    jest.advanceTimersByTime(1000);

    expect(screen.getByText('1')).toBeInTheDocument();

    jest.advanceTimersByTime(2000);

    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
