import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button = ({
  children,
  fontColor,
  fullWidth = false,
  size = 'medium',
  variant = 'contained',
  shape = 'round',
  colorTheme = '#1976d2',
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      {...restProps}
      fullWidth={fullWidth}
      size={size}
      colorTheme={colorTheme}
      variant={variant}
      shape={shape}
      fontColor={fontColor}>
      {children}
    </StyledButton>
  );
};
