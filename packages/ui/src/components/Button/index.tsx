import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';
import { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      fontColor,
      fullWidth = false,
      size = 'medium',
      variant = 'contained',
      shape = 'round',
      colorTheme = '#1976d2',
      ...restProps
    }: ButtonProps,
    ref
  ) => {
    return (
      <StyledButton
        {...restProps}
        ref={ref}
        fullWidth={fullWidth}
        size={size}
        colorTheme={colorTheme}
        variant={variant}
        shape={shape}
        fontColor={fontColor}>
        {children}
      </StyledButton>
    );
  }
);
