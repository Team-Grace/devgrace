import React from 'react';
import { StoryFn } from '@storybook/react';
import { Button } from '../../components/Button';

export default {
  title: 'components/Button',
};

const Template: StoryFn<any> = () => {
  return (
    <>
      <h2>Large</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="large" onClick={() => alert('click button type1')}>
          Default Contained Button
        </Button>
        <Button
          size="large"
          variant="outlined"
          onClick={() => alert('click button type2')}>
          Default Outlined Button
        </Button>
        <Button
          size="large"
          variant="text"
          onClick={() => alert('click button type3')}>
          Default Text Button
        </Button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Medium</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          shape="rect"
          size="medium"
          colorTheme="#eb3c27"
          onClick={() => alert('click button type4')}>
          Rect Contained Button
        </Button>
        <Button
          shape="rect"
          size="medium"
          variant="outlined"
          colorTheme="#eb3c27"
          onClick={() => alert('click button type5')}>
          Rect OutLined Button
        </Button>
        <Button
          shape="rect"
          size="medium"
          variant="text"
          colorTheme="#eb3c27"
          onClick={() => alert('click button type6')}>
          Rect Text Button
        </Button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Small</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          size="small"
          colorTheme="#ffbe0a"
          onClick={() => alert('click button type4')}>
          Default Contained Button
        </Button>
        <Button
          size="small"
          variant="outlined"
          colorTheme="#ffbe0a"
          onClick={() => alert('click button type5')}>
          Default OutLined Button
        </Button>
        <Button
          size="small"
          variant="text"
          colorTheme="#ffbe0a"
          onClick={() => alert('click button type6')}>
          Default Text Button
        </Button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Full Width</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          colorTheme="#ffbe0a"
          fullWidth
          onClick={() => alert('click button type7')}>
          Default Contained Button
        </Button>
        <Button
          colorTheme="#ffbe0a"
          fullWidth
          variant="outlined"
          onClick={() => alert('click button type8')}>
          Default Outlined Button
        </Button>
      </div>

      <div
        style={{ marginTop: '20px', display: 'flex', gap: '8px' }}
        onClick={() => alert('click button type9')}>
        <Button shape="rect" colorTheme="#5dbb63" fullWidth>
          Rect Contained Button
        </Button>
      </div>
    </>
  );
};

export const Default = {
  render: Template,
};
