import React, { Component } from 'react';
import Layout from './layout/Layout';
import WeatherScreen from './domain/city/WeatherScreen';
import appReducers from './app.reducers';
import { Provider as ReduxProvider } from 'react-redux';
import createAppStore from './config/redux.config';

const store = createAppStore(appReducers());

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