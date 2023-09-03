import React from 'react';
import { StoryFn } from '@storybook/react';
import { Button } from '../../components/Button';

export default {
  title: 'ui/components/Button',
};

const Template: StoryFn<any> = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="large" onClick={() => alert('click button type1')}>
          Button
        </Button>
        <Button
          size="large"
          variant="outlined"
          onClick={() => alert('click button type2')}>
          Button
        </Button>
        <Button
          size="large"
          variant="text"
          onClick={() => alert('click button type3')}>
          Button
        </Button>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '8px' }}>
        <Button
          shape="rect"
          size="large"
          colorTheme="#eb3c27"
          onClick={() => alert('click button type4')}>
          Button
        </Button>
        <Button
          shape="rect"
          size="large"
          variant="outlined"
          colorTheme="#eb3c27"
          onClick={() => alert('click button type5')}>
          Button
        </Button>
        <Button
          shape="rect"
          size="large"
          variant="text"
          colorTheme="#eb3c27"
          onClick={() => alert('click button type6')}>
          Button
        </Button>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '8px' }}>
        <Button
          size="large"
          colorTheme="#ffbe0a"
          fullWidth
          onClick={() => alert('click button type7')}>
          Button
        </Button>
        <Button
          size="large"
          colorTheme="#ffbe0a"
          fullWidth
          variant="outlined"
          onClick={() => alert('click button type8')}>
          Button
        </Button>
      </div>

      <div
        style={{ marginTop: '20px', display: 'flex', gap: '8px' }}
        onClick={() => alert('click button type9')}>
        <Button size="large" colorTheme="#5dbb63" fullWidth>
          Button
        </Button>
      </div>
    </>
  );
};

export const Default = {
  render: Template,
};
