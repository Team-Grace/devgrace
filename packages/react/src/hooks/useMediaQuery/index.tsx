import { isClient } from '@devgrace/utils';
import { useCallback, useEffect, useState } from 'react';

const getMatchMedia = (query: string) => {
  if (isClient()) {
    return window.matchMedia(query).matches;
  }
  return false;
};

export const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(getMatchMedia(query));

  const handleChange = useCallback(() => {
    setIsMatch(getMatchMedia(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query, handleChange]);

  return { isMatch };
};

export const Example = () => {
  const { isMatch } = useMediaQuery('(min-width: 768px)');
  return (
    <div>
      <p>브라우저 너비를 조정해보세요!</p>
      <p>
        {isMatch
          ? 'viewport 너비가 768px 이상입니다.'
          : 'viewport 너비가 768px 미만입니다.'}
      </p>
    </div>
  );
};
