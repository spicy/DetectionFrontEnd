import './App.css';

import { Description, Details, Footer, Header } from './containers';
import { Navbar, Technology } from './components';

import React from 'react';

const App = () => (
  <div className="App">
    <div className="gradient__background">
      <Navbar />
      <Header />
    </div>
    <Technology />
    <Description />
    <Details />
    <Footer />
  </div>
);

export default App;
