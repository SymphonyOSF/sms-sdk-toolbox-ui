import { addParameters, configure, addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(jsxDecorator);
addDecorator(withA11y);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/components", true, /stories\.js?$/));
}

addParameters({ viewport: { defaultViewport: 'responsive' } });

configure(loadStories, module);
