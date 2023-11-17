import { screen } from '@testing-library/react';
import { renderSetup } from '../../utils/test/renderSetup';
import { DebounceWrapper } from '.';

beforeAll(() => {
  jest.useFakeTimers();
});

interface TestComponentProps {
  onClick: () => void;
  wait: number;
}
const TestComponent = ({ onClick, wait }: TestComponentProps) => {
  return (
    <DebounceWrapper capture="onClick" wait={wait}>
      <button onClick={onClick}>Button</button>
    </DebounceWrapper>
  );
};

describe('DebounceWrapper', () => {
  it('should debounce events from a child element with the same value passed through capture', async () => {
    const mockFn = jest.fn();
    // https://github.com/testing-library/user-event/issues/833
    const { user } = renderSetup(
      <TestComponent onClick={mockFn} wait={500} />,
      { delay: null }
    );

    const button = screen.getByRole('button');
    await user.click(button);

    jest.advanceTimersByTime(300);
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(200);
    expect(mockFn).toBeCalledTimes(1);

    await user.click(button);
    await user.click(button);
    await user.click(button);

    jest.advanceTimersByTime(500);
    expect(mockFn).toBeCalledTimes(2);
  });
});
