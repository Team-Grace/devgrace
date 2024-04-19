import { usePreservedCallback } from 'hooks/usePreservedCallback';
import { useEffect } from 'react';

export const useUnmount = (callback: () => any) => {
  const callbackAction = usePreservedCallback(callback);

  // update the ref each render so if it change the newest callback will be invoked
  useEffect(() => () => callbackAction(), [callbackAction]);
};
