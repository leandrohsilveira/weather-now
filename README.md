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

## 1 Quick start guide

As it is a NodeJS app, to get started you will need to install NodeJS [here](https://nodejs.org/en/).

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

The Create React App also encapsulates [JestJS](https://jestjs.io/) configuration. To start Jest's CLI, just run `npm test` on terminal console.

To create a new test suite, just create an file with name ending with `.test.js` inside `./src` folder.

As the `Storybook.test.js` is a snapshot testing, any changes made to any component covered by the storybook may break this test suite. When it happens, you need to run the Storybook Server and see if the failing stories components rendering is correct. Then run tests again and press `u` to update the components snapshots with the changes made.

## 2 Documentation

### 2.1 Project structure

- **node_modules**: the dependencies folder.
- **public**: the output of the development server.
- **src**: source root folder.
    - .**storybook**: The Storybook stories and configurations folder.
    - **components**: Commonly shared components.
    - **config**: App dependencies configurations.
    - **domain**: App domain components.
        - **city**: City weather domain.
    - **layout**: App layout composition components.

### 2.2 Weather data load workflow

#### Redux

The Redux is an implementation of the [Flux pattern](https://facebook.github.io/flux) developed by Facebook to provide the most decoupled way of making two or more components communicate when they are far from each other in DOM tree.

#### Redux-loop

All state is handled by cycles of `action > reducer > sideEffects`.
- The `action` are dispatched by connected components and call all reducers.
- The `reducer` reduce an action to a change in the store state.
- The `sideEffects` schedules tasks and actions as side effects to be executed after the store change lifecycle is complete. An side effect may dispatch other actions or execute tasks such async web services calls that dispatch actions on it's callbacks.

#### The Weather Store

*./src/domain/city/weather.reducer.js*
```json
{
    "Nuuk,gl": {
        "title": "Nuuk, GL",
        "loading": false
    },
    "Urubici,br": {
        "type": "main",
        "title": "Urubici, BR",
        "loading": false
    },
    "Nairobi,ke": {
        "title": "Nairobi, KE",
        "loading": false
    }
}
```

#### The workflow

The WeatherScreen component is responsible for communication with Redux to retrieve all weather data to the CityCards components render them.

The WeatherScreen is connected to the entire **Weather Store**, mapped to `cities` property, with `restoreWeather` and `restoreCityWeather` actions creators, injected to `restoreAll` and `restore` properties.

1. **WeatherScreen** > componentWillMount:
    - immediately calls the `restoreAll` and set an interval to repeat it.
2. **weather.actions** > restoreWeather:
    - action with type `app.weather.restoreWeather`.
3. **weather.effects** > restoreEffect:
    - schedule a list of actions to be triggered by redux-loop after the store change complete.
4. **weather.actions** > restoreCityWeather:
    - Each action is a `restoreCityWeather` action creator for each city in the store.
    - All actions for each city is running at the same time.
5. **weather.effects** > restoreCityEffect:
    - Assuming that it is the first time call, it will schedule a `fetchCityWeather` action.
6. **weather.actions** > fetchCityWeather:
    - action with type `app.weather.fetchCityWeather`.
7. weather.reducer:
    - changes the payload city loading state to TRUE.
8. **weather.effects** > fetchEffect:
    - schedule an async task to be executed after store change is completed. 
    - if the task completes, the `storeCityWeather` action is dispatched with the data.
    - if the task fails, the `fetchCityFailed` action is dispatched with the error data.
9. **weather.service** > fetch:
    - a Web Service request to fetch the weather data of the city.
10. **weather.actions** > storeCityWeather:
    - action with type `app.weather.fetchCityWeather`.
11. **weather.reducer**:
    - changes the store city data, and also changes the it's loading flag to FALSE.
12. **weather.effects** > storeEffect:
    - stores the city weather data to `window.localStorage`.