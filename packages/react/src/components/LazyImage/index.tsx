import React, { CSSProperties, forwardRef, useMemo, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useMergeRefs } from '../../hooks/useMergeRefs';

interface LazyImageProps extends React.ComponentProps<'img'> {
  src: string;
  threshold?: number | number[];
  root?: Document | Element | null;
  rootMargin?: string;
}

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  (
    { src, style, threshold, root, rootMargin, ...restProps }: LazyImageProps,
    ref
  ) => {
    const imgRef = useIntersectionObserver<HTMLImageElement>({
      action: (entry) => {
        const targetImgElement = entry.target as HTMLImageElement;
        targetImgElement.src = src;
      },
      calledOnce: true,
      threshold,
      root,
      rootMargin,
    });

    const lazyImageStyle: CSSProperties = useMemo(() => {
      return {
        display: 'inline-block',
        ...style,
      };
    }, [style]);

    return (
      <img
        {...restProps}
        ref={useMergeRefs(ref, imgRef)}
        style={lazyImageStyle}
      />
    );
  }
);
