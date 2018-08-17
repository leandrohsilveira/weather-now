import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { compose } from 'redux';
import { App as AppDomain } from 'redux-loop-composer';

import Layout from './layout/Layout';
import WeatherScreen from './domain/weather/WeatherScreen';
import rootDomain from './domain';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const app = new AppDomain('weatherNow');

app.addDomain(rootDomain);

const store = app.compose((reduxLoop) => compose(reduxLoop, devTools));

class App extends Component {
  render() {
    return (
      <Layout>
        <ReduxProvider store={store}>
          <WeatherScreen />
        </ReduxProvider>
      </Layout>
    );
  }
}

export default App;