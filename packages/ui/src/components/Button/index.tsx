import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>;
};

export default Button;
