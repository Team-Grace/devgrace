import { useAsyncPreservedCallback } from '../useAsyncPreservedCallback';
import { useCallback, useState, useRef } from 'react';

export const useAsyncProcessQueue = (
  asyncAction: (data?: any) => Promise<any>
) => {
  const requestQueue = useRef<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const callbackAsyncAction = useAsyncPreservedCallback(asyncAction);

  const processQueue = useCallback(async () => {
    if (requestQueue.current.length === 0) {
      return;
    }

    const requestData = requestQueue.current[0];

    try {
      setIsLoading(true);
      const res = await callbackAsyncAction(requestData);

      setData(res);
    } finally {
      requestQueue.current.shift();
      setIsLoading(false);

      await processQueue();
    }
  }, [callbackAsyncAction]);

  const addToAsyncQueue = useCallback(
    async (data: any) => {
      requestQueue.current.push(data);

      if (requestQueue.current.length === 1) {
        await processQueue();
      }
    },
    [processQueue]
  );

  return { data, isLoading, addToAsyncQueue };
};
