import styled from '@emotion/styled';
import { hexToRGBA } from '@devgrace/utils';
import { ButtonOptions } from './Button.types';
import {
  getButtonBorderRadiusByShape,
  getButtonSize,
  getButtonColorThemeByVariant,
} from './Button.utils';

export const StyledButton = styled.button<ButtonOptions>`
  cursor: pointer;
  position: relative;
  outline: none;
  border: none;
  font-weight: 700;
  color: ${({ fontColor }) => fontColor};
  border-radius: ${({ shape }) => getButtonBorderRadiusByShape(shape)};
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
    const { backgroundColor, borderColor, color } =
      getButtonColorThemeByVariant(variant, colorTheme, fontColor);
    return `
      background-color: ${backgroundColor};
      border: 1px solid ${borderColor};
      color: ${color};
    `;
  }}

  &:hover {
    background-color: ${({ variant, colorTheme }) =>
      variant === 'contained'
        ? colorTheme && hexToRGBA(colorTheme, 0.8)
        : colorTheme && hexToRGBA(colorTheme, 0.1)};
  }

  &:active {
    background-color: ${({ variant, colorTheme }) =>
      variant === 'contained'
        ? colorTheme && hexToRGBA(colorTheme, 0.9)
        : colorTheme && hexToRGBA(colorTheme, 0.2)};
  }
`;
