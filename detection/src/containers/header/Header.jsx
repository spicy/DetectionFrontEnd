import './header.css';

import React from 'react';
import particles from '../../assets/ai.png';

const Header = () => (
  <div className="det__header section__padding" id="home">
    <div className="det__header-content">
      <h1 className="gradient__text">A captivating VR experience</h1>
      <p>Set in an alternative reality in 2078, you assume the role of a killer  AI robot set on targeted rampages by a mysterious group.</p>
    </div>

    <div className="det__header-image">
      <img src={particles} />
    </div>
  </div>
);

export default Header;
