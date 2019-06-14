import { addParameters, configure, addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(jsxDecorator);
addDecorator(withA11y);
addParameters({ viewport: { defaultViewport: 'responsive' } });

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/components", true, /stories\.js?$/));
}

configure(loadStories, module);
