import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #111;
  border-radius: 6px;
  cursor: pointer;
`;
