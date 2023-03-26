import './App.css';

import { DetectionDesc, Features, Footer, Header } from './containers';
import { Navbar, Technology } from './components';

import React from 'react';

const App = () => (
  <div className="App">
    <div className="gradient__background">
      <Navbar />
      <Header />
    </div>
    <Technology />
    <DetectionDesc />
    <Features />
    <Footer />
  </div>
);

export default App;
