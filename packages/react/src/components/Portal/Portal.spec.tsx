import { render, screen } from '@testing-library/react';
import { Portal } from '.';

describe('Portal', () => {
  it('render Portal', () => {
    render(<Portal />);
    const PortalBox = screen.getByText('Portal');

    expect(PortalBox).toBeInTheDocument();
  });
});
