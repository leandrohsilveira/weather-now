import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/CityCard.story');
  // You can require as many stories as you need.
}

configure(loadStories, module);