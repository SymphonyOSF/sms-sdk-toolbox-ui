import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toast from '../src/components/toast/toast';

storiesOf('Toast', module)
  .add('success', () => (
    <Toast
      toastHide={action('Hide Toast')}
      toastText="Text inside toast"
      toastType="success"
    />
  ))
  .add('failure', () => (
    <Toast
      toastHide={action('Hide Toast')}
      toastText="Text inside toast"
      errorMessage="Error reason"
      toastType="error"
    />
  ))
  .add('message', () => (
    <Toast
      toastHide={action('Hide Toast')}
      toastText="Text inside toast"
      toastType="message"
    />
  ))
  .add('info', () => (
    <Toast
      toastHide={action('Hide Toast')}
      toastText="Text inside toast"
      toastType="info"
    />
  ))
  .add('warning', () => (
    <Toast
      toastHide={action('Hide Toast')}
      toastText="Text inside toast"
      toastType="warning"
    />
  ))
  .add('large text', () => (
    <Toast
      toastHide={action('Hide Toast')}
      toastText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices orci vitae luctus hendrerit. Nullam velit tortor, pellentesque vitae fermentum quis, gravida quis elit. Sed nec volutpat erat. Proin ac condimentum justo. Maecenas vel aliquam arcu, tincidunt sollicitudin nibh. Nunc sed ante eget ipsum suscipit molestie. Mauris varius in purus sed accumsan. Ut tincidunt suscipit nunc nec sollicitudin. Cras lacinia ipsum sed nibh sollicitudin tempor. Curabitur eget tempus mi. Duis orci odio, dictum in gravida eu, congue sit amet ligula. Nullam vitae purus magna. Sed bibendum quis augue a aliquet. Etiam sagittis neque eu ultricies ornare. Nulla ac dolor et."
      toastType="success"
    />
  ))
  .add('embedded', () => (
    <div>
      <Toast
        toastHide={action('Hide Toast')}
        toastText="Text inside toast"
        toastType="success"
        isEmbedded
      />
      <Toast
        toastHide={action('Hide Toast')}
        toastText="Text inside toast"
        toastType="error"
        errorMessage="Error reason"
        isEmbedded
      />
      <Toast
        toastHide={action('Hide Toast')}
        toastText="Text inside toast"
        toastType="message"
        isEmbedded
      />
      <Toast
        toastHide={action('Hide Toast')}
        toastText="Text inside toast"
        toastType="info"
        isEmbedded
      />
      <Toast
        toastHide={action('Hide Toast')}
        toastText="Text inside toast"
        toastType="warning"
        isEmbedded
      />
    </div>
  ));
