import React, { Component } from 'react';
import Layout from './layout/Layout';
import WeatherScreen from './domain/city/WeatherScreen';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './appModule';

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