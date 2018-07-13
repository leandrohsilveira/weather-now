# Weather Now

Wellcome to Weather Now project. The Weather Now app is designed to show some weather data of three cities:
- **Nuuk / GL**: displays only the temperature.
- **Urubici / BR**: displays the temperature, pressure and humidity. 
- **Nairobi / KE**: displays only the temperature.

The app was built using the following technologies:

- [NodeJS](https://nodejs.org/en/): 8.11.1;
- [ReactJS](https://reactjs.org/): 16.4.1;
- [Redux](https://redux.js.org/): 4.0.0;
- [React redux integration](https://redux.js.org/basics/usage-with-react): 5.0.7;
- [Redux loop middleware](https://redux-loop.js.org/): 4.3.3;

## 1. Quick start guide

As it is a NodeJS app, to get started you'll need to get NodeJS installed [here](https://nodejs.org/en/).

- Open a terminal console and navigate to a folder of your choice to place the project's source code;
- Clone repository: `git clone https://github.com/leandrohsilveira/weather-now.git`;
- Navigate to project folder: `cd weather-now`;
- Install dependencies: `npm i`;

### 1.1 Development server

This is the quicker way to start interacting with the application. The project was created from [Create React App CLI](https://github.com/facebook/create-react-app) that encapsulate all setup and provides a development server using Webpack. To start it, just run `npm start` on terminal console in project's root folder.

### 1.2 Components Storybook

The [Storybook](https://storybook.js.org) is the best way to develop components ensuring it's isolation. That combined with [StoryShots addon](https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core) provides also an Snapshot Test Suite to test the rendered output tree of the Components.

To start Storybook server, run `npm run storybook` on terminal console.

All stories are placed in `./src/.storybook/stories` with files named `ComponentName.story.js`. To create a new component stories module, just create a new file in stories folder.

### 1.3 Tests


