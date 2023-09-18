import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

export const renderSetup = (jsx: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};
