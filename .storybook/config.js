import { addParameters, configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/components", true, /stories\.js?$/));
}
addDecorator(withA11y)

addParameters({ viewport: { defaultViewport: 'responsive' } });

configure(loadStories, module);
