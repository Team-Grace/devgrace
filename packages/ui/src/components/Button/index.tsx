import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';
import { Loader } from '../Loader';
import { getButtonLoaderSize } from './Button.utils';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      fontColor,
      isLoading = false,
      fullWidth = false,
      fontWeight = 700,
      size = 'medium',
      variant = 'contained',
      shape = 'round',
      colorTheme = 'blue',
      ...restProps
    }: ButtonProps,
    ref
  ) => {
    const { width: loaderWidth, height: loaderHeight } =
      getButtonLoaderSize(size);

    return (
      <StyledButton
        {...restProps}
        ref={ref}
        fullWidth={fullWidth}
        fontWeight={fontWeight}
        size={size}
        colorTheme={colorTheme}
        variant={variant}
        shape={shape}
        fontColor={fontColor}>
        {isLoading && <Loader width={loaderWidth} height={loaderHeight} />}
        {children}
      </StyledButton>
    );
  }
);
