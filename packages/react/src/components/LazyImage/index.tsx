import React, { CSSProperties, forwardRef, useMemo, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazyImageProps extends React.ComponentProps<'img'> {
  src: string;
  duration?: number;
  fallback?: React.ReactNode;
  threshold?: number | number[];
  root?: Document | Element | null;
  rootMargin?: string;
}

export const LazyImage = forwardRef<HTMLDivElement, LazyImageProps>(
  (
    {
      src,
      fallback,
      threshold,
      root,
      rootMargin,
      width,
      height,
      duration = 0,
      ...restProps
    }: LazyImageProps,
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
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

    const lazyImageWrapperStyle: CSSProperties = useMemo(() => {
      return {
        position: 'relative',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      };
    }, [width, height]);

    const lazyImageStyle: CSSProperties = useMemo(() => {
      return {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: isLoaded ? 1 : 0,
        transition: `opacity ${duration / 1000}s`,
      };
    }, [isLoaded, duration]);

    return (
      <div ref={ref} style={lazyImageWrapperStyle}>
        {!isLoaded && fallback ? fallback : null}
        <img
          {...restProps}
          style={lazyImageStyle}
          ref={imgRef}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  }
);
