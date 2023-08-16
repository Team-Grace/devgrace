import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  console.log("test");

  return <div>{children}</div>;
};

export default Button;
