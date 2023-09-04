import styled from '@emotion/styled';
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
    const { defaultBgColor, hoverBgColor, activeBgColor, borderColor, color } =
      getButtonColorThemeByVariant(variant, fontColor, colorTheme);

    return `
      background-color: ${defaultBgColor};
      border: 1px solid ${borderColor};
      color: ${color};

      &:hover {
        background-color: ${hoverBgColor};
      }
    
      &:active {
        background-color: ${activeBgColor};
      }
    `;
  }}
`;
