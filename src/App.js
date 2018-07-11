import React, { Component } from 'react';
import Layout from './layout/Layout';
import CardGrid from './components/card/CardGrid';
import Card from './components/card/Card';

class App extends Component {
  render() {
    return (
      <Layout>
        <CardGrid>
          <Card title="Nuuk, GL" />
          <Card title="Urubici, BR" type="main" />
          <Card title="Nairobi, KE" />
        </CardGrid>
      </Layout>
    );
  }
}

export default App;