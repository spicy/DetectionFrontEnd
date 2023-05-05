import './App.css';

import { Description, Details, Footer, Header } from './containers';
import { Navbar, YoutubeEmbed } from './components';

import React from 'react';

const App = () => (
  <div className="App">
    <div className="fade__background">
      <Navbar />
      <Header />
    </div>
    <Description />
    <Details />
    <Footer />
  </div>
);

export default App;
