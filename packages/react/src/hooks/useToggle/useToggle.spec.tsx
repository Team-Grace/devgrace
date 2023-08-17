import { fireEvent, render, screen } from '@testing-library/react';
import { useToggle } from '.';

const TestComponent = () => {
  const [bool, toggle] = useToggle(false);

  return (
    <div>
      <p role={'paragraph'}>{`${bool}`}</p>
      <button onClick={toggle}>button</button>
    </div>
  );
};

describe('useToggle', () => {
  it('When toggle is executed, the value of bool changes from true to false, or from false to true.', () => {
    render(<TestComponent />);

    const button = screen.getByRole('button');
    const paragraph = screen.getByRole('paragraph');

    expect(paragraph).toHaveTextContent('false');

    fireEvent.click(button);

    expect(paragraph).toHaveTextContent('true');

    fireEvent.click(button);

    expect(paragraph).toHaveTextContent('false');

    fireEvent.click(button);

    expect(paragraph).toHaveTextContent('true');
  });
});
