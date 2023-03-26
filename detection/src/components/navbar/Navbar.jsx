import './navbar.css';

import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

import logo from '../../logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="det__navbar">
      <div className="det__navbar-links">
        <div className="det__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="det__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatis">What is Detection?</a></p>
          <p><a href="#features">Features</a></p>
        </div>
      </div>
      <div className="det__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="det__navbar-menu_container scale-up-center">
          <div className="det__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatis">What is Detection?</a></p>
            <p><a href="#features">Features</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
