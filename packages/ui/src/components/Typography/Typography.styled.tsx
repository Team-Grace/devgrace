import { createTypographyStyledComponent } from './Typography.utils';
import { rem } from '../../utils/rem';

export const HeadingTag1 = createTypographyStyledComponent({
  tag: 'h1',
  defaultFontSize: rem(32),
  defaultFontWeight: 700,
});

export const HeadingTag2 = createTypographyStyledComponent({
  tag: 'h2',
  defaultFontSize: rem(28),
  defaultFontWeight: 700,
});

export const HeadingTag3 = createTypographyStyledComponent({
  tag: 'h3',
  defaultFontSize: rem(24),
  defaultFontWeight: 700,
});

export const HeadingTag4 = createTypographyStyledComponent({
  tag: 'h4',
  defaultFontSize: rem(20),
  defaultFontWeight: 700,
});

export const HeadingTag5 = createTypographyStyledComponent({
  tag: 'h5',
  defaultFontSize: rem(16),
  defaultFontWeight: 700,
});

export const ParagraphTag = createTypographyStyledComponent({
  tag: 'p',
  defaultFontSize: rem(16),
  defaultFontWeight: 500,
});

export const SpanTag = createTypographyStyledComponent({
  tag: 'span',
  defaultFontSize: rem(16),
  defaultFontWeight: 500,
});
