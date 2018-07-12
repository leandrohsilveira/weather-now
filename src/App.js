import React, { Component } from 'react';
import Layout from './layout/Layout';
import WeatherScreen from './domain/city/WeatherScreen';

const cities = {
  "Nuuk,GL": {
    title: 'Nuuk, GL',
    value: -4,
    humidity: 65,
    pressure: 892
  },
  "Urubici,BR": {
    title: 'Urubici, BR',
    value: 19,
    humidity: 75,
    pressure: 892
  },
  "Nairobi,KE": {
    title: 'Nairobi, KE',
    value: 31,
    humidity: 71,
    pressure: 892
  },
}

class App extends Component {
  render() {
    return (
      <Layout>
        <WeatherScreen cities={cities} />
      </Layout>
    );
  }
}

export default App;