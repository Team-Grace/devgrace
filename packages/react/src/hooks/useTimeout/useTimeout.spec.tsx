import { act, render, renderHook, screen } from '@testing-library/react';
import { useTimeout } from '.';
import { useState } from 'react';

const delayTime = 1000;

beforeAll(() => {
  jest.useFakeTimers();
});

const TestComponent = () => {
  const [number, setNumber] = useState(0);

  useTimeout(() => {
    act(() => setNumber(number + 1));
  }, delayTime);

  useTimeout(() => {
    act(() => setNumber(number + 1));
  }, delayTime * 2);

  return <div>{number}</div>;
};

describe('useTimeout', () => {
  it('mockFn is executed after a given time', () => {
    const mockFn = jest.fn();

    renderHook(() => useTimeout(mockFn, delayTime));

    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(delayTime);
    expect(mockFn).toBeCalled();
  });

  it('delay is null, timeout is disabled', () => {
    const mockFn = jest.fn();

    renderHook(() => useTimeout(mockFn, null));

    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(delayTime);
    expect(mockFn).not.toBeCalled();
  });

  it('callback function always guarantees the latest state', () => {
    render(<TestComponent />);

    expect(screen.getByText('0')).toBeInTheDocument();

    jest.advanceTimersByTime(delayTime);
    expect(screen.getByText('1')).toBeInTheDocument();

    jest.advanceTimersByTime(delayTime * 2);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
