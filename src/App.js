import React, { Component } from 'react';
import Layout from './layout/Layout';
import CardGrid from './components/card/CardGrid';
import CityCard from './domain/city/CityCard';

class App extends Component {
  render() {
    return (
      <Layout>
        <CardGrid>
          <CityCard title="Nuuk, GL" value={-4} />
          <CityCard title="Urubici, BR" value={19} type="main" />
          <CityCard title="Nairobi, KE" value={31} />
        </CardGrid>
      </Layout>
    );
  }
}

export default App;