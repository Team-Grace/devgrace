import React from 'react';
import { StoryFn } from '@storybook/react';
import { Button } from '../../components/Button';

export default {
  title: 'ui/components/Button',
};

const Template: StoryFn<any> = () => {
  return (
    <div>
      <Button>버튼 테스트</Button>
    </div>
  );
};

export const Default = {
  render: Template,
};
