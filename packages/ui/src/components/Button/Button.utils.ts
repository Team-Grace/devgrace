import { colors, ColorThemeKeys } from '../../config/theme';
import { ButtonOptions } from './Button.types';

export const getButtonSize = (size: ButtonOptions['size']) => {
  const buttonSizeObj = {
    small: {
      height: '32px',
      padding: '0 12px',
      fontSize: '14px',
    },
    medium: {
      height: '40px',
      padding: '0 16px',
      fontSize: '16px',
    },
    large: {
      height: '48px',
      padding: '0 24px',
      fontSize: '18px',
    },
  };
  return buttonSizeObj[size || 'medium'];
};

export const getButtonBorderRadiusByShape = (shape: ButtonOptions['shape']) => {
  const buttonShapeObj = {
    rect: '0px',
    round: '6px',
  };
  return buttonShapeObj[shape || 'round'];
};

export const getButtonColorThemeByVariant = (
  variant: ButtonOptions['variant'],
  fontColor: ButtonOptions['fontColor'],
  colorTheme?: ColorThemeKeys
) => {
  if (!colorTheme) {
    return {
      defaultBgColor: colors['blue'][500],
      hoverBgColor: colors['blue'][600],
      activeBgColor: colors['blue'][700],
      borderColor: colors['blue'],
      color: fontColor || '#fff',
    } as const;
  }

  const buttonColorThemeObj = {
    contained: {
      defaultBgColor: colors[colorTheme][500],
      hoverBgColor: colors[colorTheme][600],
      activeBgColor: colors[colorTheme][700],
      borderColor: colors[colorTheme][500],
      color: fontColor || '#fff',
    },
    outlined: {
      defaultBgColor: '#fff',
      hoverBgColor: colors[colorTheme][50],
      activeBgColor: colors[colorTheme][100],
      borderColor: colors[colorTheme][500],
      color: fontColor || colors[colorTheme][500],
    },
    text: {
      defaultBgColor: '#fff',
      hoverBgColor: colors[colorTheme][50],
      activeBgColor: colors[colorTheme][100],
      borderColor: '#fff',
      color: fontColor || colors[colorTheme][500],
    },
  } as const;

  return buttonColorThemeObj[variant || 'contained'];
};
