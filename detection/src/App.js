import './App.css';

import { Description, Details, Footer, Header } from './containers';
import { Navbar, Technology, YoutubeEmbed } from './components';

import React from 'react';

const App = () => (
  <div className="App">
    <div className="fade__background">
      <Navbar />
      <Header />
    </div>
    <YoutubeEmbed embedId="OTIwsWaH92k" />
    <Technology />
    <Description />
    <Details />
    <Footer />
  </div>
);

export default App;
