import { CSSProperties } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
  colorTheme?: CSSProperties['backgroundColor'];
  fontColor?: CSSProperties['color'];
}

export type ButtonOptions = Pick<
  ButtonProps,
  'size' | 'variant' | 'shape' | 'fontColor' | 'colorTheme' | 'fullWidth'
>;
