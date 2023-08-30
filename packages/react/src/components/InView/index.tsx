import {
  useIntersectionObserver,
  UseIntersectionObserverProps,
} from '../../hooks/useIntersectionObserver';
import React, { CSSProperties } from 'react';

interface InViewProps extends UseIntersectionObserverProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

const InView = ({ children, style, ...rest }: InViewProps) => {
  const ref = useIntersectionObserver<HTMLDivElement>({ ...rest });

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default InView;
