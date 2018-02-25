import { configure } from '@storybook/react';
import '../src/stories/css/style.less';

function loadStories() {
  require('../src/stories');
  require('../src/stories/DataDisplay');
}

configure(loadStories, module);
