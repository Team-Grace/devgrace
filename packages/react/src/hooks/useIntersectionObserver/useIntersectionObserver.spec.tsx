import {
  mockIntersect,
  mockIntersectionObserverCleanup,
  mockIntersectionObserverSetup,
} from '../../utils/test/mockIntersectionObserver';
import { useIntersectionObserver } from '.';
import { render, waitFor, screen } from '@testing-library/react';

beforeEach(() => {
  mockIntersectionObserverSetup();
});

afterEach(() => {
  mockIntersectionObserverCleanup();
});

const TestComponent = ({
  action1,
  action2,
}: {
  action1: () => void;
  action2: () => void;
}) => {
  const boxRef1 = useIntersectionObserver<HTMLDivElement>({
    action: action1,
    calledOnce: true,
  });
  const boxRef2 = useIntersectionObserver<HTMLDivElement>({
    action: action2,
  });

  return (
    <div>
      <div ref={boxRef1}>box1</div>
      <div ref={boxRef2}>box2</div>
    </div>
  );
};

describe('useIntersectionObserver', () => {
  it('should call the action callback function when the target element assigned to the returned "ref" is exposed to the Viewport', async () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    render(<TestComponent action1={mockFn1} action2={mockFn2} />);

    const box1 = screen.getByText('box1');
    const box2 = screen.getByText('box2');

    expect(mockFn1).toBeCalledTimes(0);
    expect(mockFn2).toBeCalledTimes(0);

    await waitFor(() => mockIntersect({ type: 'view', element: box1 }));
    expect(mockFn1).toBeCalledTimes(1);

    await waitFor(() => mockIntersect({ type: 'view', element: box2 }));
    expect(mockFn2).toBeCalledTimes(1);
  });

  it('should call the action callback function only once when the calledOnce option is true', async () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    render(<TestComponent action1={mockFn1} action2={mockFn2} />);

    const box1 = screen.getByText('box1');

    expect(mockFn2).toBeCalledTimes(0);

    await waitFor(() => mockIntersect({ type: 'view', element: box1 }));
    expect(mockFn1).toBeCalledTimes(1);

    await waitFor(() => mockIntersect({ type: 'hide', element: box1 }));
    await waitFor(() => mockIntersect({ type: 'view', element: box1 }));
    await waitFor(() => mockIntersect({ type: 'hide', element: box1 }));
    await waitFor(() => mockIntersect({ type: 'view', element: box1 }));

    expect(mockFn1).toBeCalledTimes(1);
  });

  it('should call the action callback function every time the target element is exposed to the Viewport when the calledOnce option is false', async () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    render(<TestComponent action1={mockFn1} action2={mockFn2} />);

    const box2 = screen.getByText('box2');

    expect(mockFn2).toBeCalledTimes(0);

    await waitFor(() => mockIntersect({ type: 'view', element: box2 }));
    expect(mockFn2).toBeCalledTimes(1);

    await waitFor(() => mockIntersect({ type: 'hide', element: box2 }));
    await waitFor(() => mockIntersect({ type: 'view', element: box2 }));
    expect(mockFn2).toBeCalledTimes(2);

    await waitFor(() => mockIntersect({ type: 'hide', element: box2 }));
    await waitFor(() => mockIntersect({ type: 'view', element: box2 }));
    expect(mockFn2).toBeCalledTimes(3);
  });
});
