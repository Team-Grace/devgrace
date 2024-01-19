import { isClient } from '@devgrace/utils';
import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const getMatchMedia = (query: string) => {
    if (isClient()) {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [isMatch, setIsMatch] = useState(getMatchMedia(query));

  const handleChange = useCallback(() => {
    setIsMatch(getMatchMedia(query));
  }, [query, getMatchMedia]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query, handleChange]);

  return { isMatch };
};

export default useMediaQuery;
