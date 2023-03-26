import './App.css';

import { Brand, CTA, Navbar } from './components';
import { DetectionDesc, Features, Footer, Header } from './containers';

import React from 'react';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <DetectionDesc />
    <Features />
    <CTA />
    <Footer />
  </div>
);

export default App;
