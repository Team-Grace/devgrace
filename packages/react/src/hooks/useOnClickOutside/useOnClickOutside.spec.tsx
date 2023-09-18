import { screen } from '@testing-library/react';
import { useOnClickOutside } from '.';
import { userEventSetup } from '../../utils/test/userEventSetup';

const TestComponent = ({ onAction }: { onAction: () => void }) => {
  const { ref } = useOnClickOutside<HTMLDivElement>(onAction);

  return (
    <div role="outside-box">
      outside
      <div ref={ref} role="inner-box">
        inner
      </div>
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('should call the callback function when clicking on an element outside of the target element', async () => {
    const mockFn = jest.fn();
    const { user } = userEventSetup(<TestComponent onAction={mockFn} />);

    const outsideBox = screen.getByRole('outside-box');
    const innerBox = screen.getByRole('inner-box');

    await user.click(innerBox);
    expect(mockFn).toBeCalledTimes(0);

    await user.click(outsideBox);
    expect(mockFn).toBeCalledTimes(1);

    await user.click(innerBox);
    expect(mockFn).toBeCalledTimes(1);
  });
});
