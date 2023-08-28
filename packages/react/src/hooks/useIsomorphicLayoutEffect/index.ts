import { isClient } from './../../../../utils/src/device/isClient/index';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = isClient()
  ? useLayoutEffect
  : useEffect;
