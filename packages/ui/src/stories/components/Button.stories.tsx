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
        <Button size="large" onClick={() => console.log('click button type1')}>
          Default Contained Button
        </Button>
        <Button
          size="large"
          variant="outlined"
          onClick={() => console.log('click button type2')}>
          Default Outlined Button
        </Button>
        <Button
          size="large"
          variant="text"
          onClick={() => console.log('click button type3')}>
          Default Text Button
        </Button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Medium</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          shape="rect"
          size="medium"
          colorTheme="indigo"
          onClick={() => console.log('click button type4')}>
          Rect Contained Button
        </Button>
        <Button
          shape="rect"
          size="medium"
          colorTheme="indigo"
          variant="outlined"
          onClick={() => console.log('click button type5')}>
          Rect OutLined Button
        </Button>
        <Button
          shape="rect"
          size="medium"
          colorTheme="indigo"
          variant="text"
          onClick={() => console.log('click button type6')}>
          Rect Text Button
        </Button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Small</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          size="small"
          colorTheme="orange"
          onClick={() => console.log('click button type4')}>
          Default Contained Button
        </Button>
        <Button
          size="small"
          colorTheme="orange"
          variant="outlined"
          onClick={() => console.log('click button type5')}>
          Default OutLined Button
        </Button>
        <Button
          size="small"
          colorTheme="orange"
          variant="text"
          onClick={() => console.log('click button type6')}>
          Default Text Button
        </Button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Full Width</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          fullWidth
          colorTheme="pink"
          onClick={() => console.log('click button type7')}>
          Default Contained Button
        </Button>
        <Button
          fullWidth
          colorTheme="pink"
          variant="outlined"
          onClick={() => console.log('click button type8')}>
          Default Outlined Button
        </Button>
      </div>

      <div
        style={{ marginTop: '20px', display: 'flex', gap: '8px' }}
        onClick={() => console.log('click button type9')}>
        <Button shape="rect" colorTheme="pink" fullWidth>
          Rect Contained Button
        </Button>
      </div>
    </>
  );
};

export const Default = {
  render: Template,
};
