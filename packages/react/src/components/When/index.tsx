import React from 'react';
import { PropsWithChildren } from 'react';

type Condition = boolean | ((...args: any) => boolean);

export interface WhenProps extends PropsWithChildren {
  condition: Condition;
}

const getConditionResult = (condition: Condition) => {
  return typeof condition === 'function' ? condition() : condition;
};

export const When = ({ children, condition }: WhenProps) => {
  const conditionResult = getConditionResult(condition);

  if (!conditionResult) return null;
  return <React.Fragment>{children}</React.Fragment>;
};
