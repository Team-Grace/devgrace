import { CSSProperties } from 'react';
import { ColorThemeKeys } from '../../config/theme';

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  fontWeight?: CSSProperties['fontWeight'];
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  variant?: 'contained' | 'outlined' | 'text';
  colorTheme?: ColorThemeKeys;
  fontColor?: CSSProperties['color'];
}

export type ButtonStyledOptions = Pick<
  ButtonProps,
  | 'size'
  | 'variant'
  | 'shape'
  | 'fontColor'
  | 'colorTheme'
  | 'fullWidth'
  | 'fontWeight'
  | 'isLoading'
>;
