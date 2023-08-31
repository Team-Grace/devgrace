import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazyImageProps extends React.ComponentProps<'img'> {
  src: string;
  threshold?: number | number[];
  root?: Document | Element | null;
  rootMargin?: string;
}

export const LazyImage = ({
  src,
  threshold,
  root,
  rootMargin,
  ...restProps
}: LazyImageProps) => {
  const ref = useIntersectionObserver<HTMLImageElement>({
    action: (entry) => {
      const targetImgElement = entry.target as HTMLImageElement;
      targetImgElement.src = src;
    },
    calledOnce: true,
    threshold,
    root,
    rootMargin,
  });

  return <img ref={ref} {...restProps} />;
};
