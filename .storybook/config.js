import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/ExchangeItem.js');
  // require('../src/stories/Homepage.js');
}

configure(loadStories, module);
