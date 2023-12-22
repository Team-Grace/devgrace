import React, { PropsWithChildren, useEffect } from 'react';
import { abRandom, noop } from '@devgrace/utils';
import { usePreservedCallback } from '../../hooks/usePreservedCallback';

interface ABProps {
  onAction?: () => void;
}

const OVER_COUNT = 2;

export const AB = ({ children }: PropsWithChildren) => {
  const ab = abRandom();
  const childrenList = React.Children.toArray(children) as JSX.Element[];
  let aCount = 0;
  let bCount = 0;

  if (childrenList.length !== 2) {
    return null;
  }

  for (const child of childrenList) {
    const isValidComponentType = [AB.CaseA, AB.CaseB].includes(child.type);

    if (!isValidComponentType) {
      return null;
    }

    if (child.type === AB.CaseA) {
      aCount += 1;
    } else {
      bCount += 1;
    }
  }

  if (aCount >= OVER_COUNT || bCount >= OVER_COUNT) {
    return null;
  }
  return ab ? childrenList[0] : childrenList[1];
};

AB.CaseA = ({ children, onAction }: PropsWithChildren<ABProps>) => {
  const callbackAction = usePreservedCallback(onAction || noop);

  useEffect(() => {
    callbackAction();
  }, [callbackAction]);

  return <React.Fragment>{children}</React.Fragment>;
};

AB.CaseB = ({ children, onAction }: PropsWithChildren<ABProps>) => {
  const callbackAction = usePreservedCallback(onAction || noop);

  useEffect(() => {
    callbackAction();
  }, [callbackAction]);

  return <React.Fragment>{children}</React.Fragment>;
};
