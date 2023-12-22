import React, { PropsWithChildren, CSSProperties } from 'react';
import * as S from './Typography.styled';

interface BaseTypographyProps {
  textAlign?: CSSProperties['textAlign'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  whiteSpace?: CSSProperties['whiteSpace'];
  bodyStyle?: CSSProperties;
}

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    BaseTypographyProps {
  level?: 1 | 2 | 3 | 4 | 5;
}

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> &
  BaseTypographyProps;

export type TextProps = React.HTMLAttributes<HTMLSpanElement> &
  BaseTypographyProps;

export interface StyledTypographyProps extends BaseTypographyProps {
  color?: CSSProperties['color'];
}

const Title = ({
  children,
  level = 1,
  ...restProps
}: PropsWithChildren<TitleProps>) => {
  const headingTag = {
    1: <S.HeadingTag1 {...restProps}>{children}</S.HeadingTag1>,
    2: <S.HeadingTag2 {...restProps}>{children}</S.HeadingTag2>,
    3: <S.HeadingTag3 {...restProps}>{children}</S.HeadingTag3>,
    4: <S.HeadingTag4 {...restProps}>{children}</S.HeadingTag4>,
    5: <S.HeadingTag5 {...restProps}>{children}</S.HeadingTag5>,
  } as const;

  return headingTag[level];
};

const Paragraph = ({
  children,
  ...restProps
}: PropsWithChildren<ParagraphProps>) => {
  return <S.ParagraphTag {...restProps}>{children}</S.ParagraphTag>;
};

const Text = ({ children, ...restProps }: PropsWithChildren<TextProps>) => {
  return <S.SpanTag {...restProps}>{children}</S.SpanTag>;
};

export const Typography = Object.assign(
  {},
  {
    Title,
    Paragraph,
    Text,
  }
);
