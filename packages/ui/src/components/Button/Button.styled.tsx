import styled from '@emotion/styled';
import { ButtonOptions } from './Button.types';
import {
  getButtonShape,
  getButtonSize,
  getButtonVariant,
} from './Button.utils';
import { hexToRgba } from '@devgrace/utils';

export const StyledButton = styled.button<ButtonOptions>`
  cursor: pointer;
  position: relative;
  outline: none;
  border: none;
  font-weight: 700;
  color: ${({ fontColor }) => fontColor};
  border-radius: ${({ shape }) => getButtonShape(shape).borderRadius};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  ${({ size }) => {
    const { height, padding, fontSize } = getButtonSize(size);
    return `
      height: ${height};
      padding: ${padding};
      font-size: ${fontSize};
    `;
  }};

  ${({ variant, colorTheme, fontColor }) => {
    const { backgroundColor, borderColor, color } = getButtonVariant(
      variant,
      colorTheme,
      fontColor
    );
    return `
      background-color: ${backgroundColor};
      border: 1px solid ${borderColor};
      color: ${color};
    `;
  }}

  &:hover {
    background-color: ${({ variant, colorTheme }) =>
      variant === 'contained'
        ? colorTheme && hexToRgba(colorTheme, 0.8)
        : colorTheme && hexToRgba(colorTheme, 0.1)};
  }

  &:active {
    background-color: ${({ variant, colorTheme }) =>
      variant === 'contained'
        ? colorTheme && hexToRgba(colorTheme, 0.9)
        : colorTheme && hexToRgba(colorTheme, 0.2)};
  }
`;
