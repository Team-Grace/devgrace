import React from 'react';
import { StoryFn } from '@storybook/react';
import { Loader } from '../../components/Loader';

export default {
  title: 'components/Loader',
};

const Template: StoryFn<any> = () => {
  return (
    <>
      <h2>Size</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Loader width={100} height={100} />
        <Loader width={80} height={80} />
        <Loader width={60} height={60} />
        <Loader width={40} height={40} />
        <Loader width={20} height={20} />
      </div>

      <h2>Color</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Loader width={100} height={100} />
        <Loader width={80} height={80} color="red" />
        <Loader width={60} height={60} color="green" />
        <Loader width={40} height={40} color="blue" />
        <Loader width={20} height={20} color="orange" />
      </div>

      <h2>Duration</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Loader width={100} height={100} />
        <Loader width={80} height={80} color="red" duration={1} />
        <Loader width={60} height={60} color="green" duration={1.5} />
        <Loader width={40} height={40} color="blue" duration={2} />
        <Loader width={20} height={20} color="orange" duration={2.5} />
      </div>
    </>
  );
};

export const Default = {
  render: Template,
};
