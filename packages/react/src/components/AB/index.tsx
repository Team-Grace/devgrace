import React from 'react';
import { abRandom } from '@devgrace/utils';

interface ABProps {
  children: React.ReactNode;
}

const OVER_COUNT = 2;

export const AB = ({ children }: ABProps) => {
  const ab = abRandom();
  const childrenList = React.Children.toArray(children) as JSX.Element[];
  let aCount = 0;
  let bCount = 0;

  for (const child of childrenList) {
    if (![AB.CaseA, AB.CaseB].includes(child.type)) {
      return null;
    }

    if (child.type === AB.CaseA) {
      aCount += 1;
    } else {
      bCount += 1;
    }
  }

  if (childrenList.length !== 2) {
    return null;
  }

  if (aCount >= OVER_COUNT || bCount >= OVER_COUNT) {
    return null;
  }

  return ab ? childrenList[0] : childrenList[1];
};

AB.CaseA = ({ children }: ABProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};

AB.CaseB = ({ children }: ABProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};
