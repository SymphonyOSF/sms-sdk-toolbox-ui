import { configure } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown, faTimes, faSearch,
  faCheck, faInfo, faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

library.add(faChevronDown);
library.add(faTimes);
library.add(faSearch);
library.add(faCheck);
library.add(faInfo);
library.add(faExclamationTriangle);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
