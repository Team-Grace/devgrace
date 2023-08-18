import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('render Button', () => {
    render(<Button>Button</Button>);
    const button = screen.getByText('Button');

    expect(button).toBeInTheDocument();
  });
});
