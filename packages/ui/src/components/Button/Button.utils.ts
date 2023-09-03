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
  colorTheme: ButtonOptions['colorTheme'],
  fontColor: ButtonOptions['fontColor']
) => {
  const buttonVariantObj = {
    contained: {
      backgroundColor: colorTheme,
      borderColor: colorTheme,
      color: fontColor || '#fff',
    },
    outlined: {
      backgroundColor: '#fff',
      borderColor: colorTheme,
      color: fontColor || colorTheme,
    },
    text: {
      backgroundColor: '#fff',
      borderColor: '#fff',
      color: colorTheme,
    },
  };

  return buttonVariantObj[variant || 'contained'];
};
