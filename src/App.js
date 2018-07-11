import React, { Component } from 'react';
import Layout from './layout/Layout';
import CardGrid from './components/card/CardGrid';
import CityCard from './domain/city/CityCard';

class App extends Component {
  render() {
    return (
      <Layout>
        <CardGrid>
          <CityCard title="Nuuk, GL" />
          <CityCard title="Urubici, BR" type="main" />
          <CityCard title="Nairobi, KE" />
        </CardGrid>
      </Layout>
    );
  }
}

export default App;