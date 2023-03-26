import './footer.css';

import React from 'react';
import detLogo from '../../logo.svg';

const Footer = () => (
  <div className="det__footer section__padding">
    <div className="det__footer-heading">
      <h1 className="gradient__text">Play the beta and give us your feedback!</h1>
    </div>

    <div className="det__footer-links">
      <div className="det__footer-links_logo">
        <img src={detLogo} alt="det_logo" />
        <p>Daniel Currey, <br /> All Rights Reserved</p>
      </div>
      <div className="det__footer-links_div">
        <h4>Contributors</h4>
        <p>Daniel Currey, Lead Dev</p>
        <p>Cameron Batchelor, Dev</p>
        <p>Jeric Baquiran, Dev</p>
      </div>
      <div className="det__footer-links_div">
        <h4>Contributors</h4>
        <p>Kenny Dang, Dev</p>
        <p>Michael Khuri, Dev</p>
      </div> 
      <div className="det__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
        <p>Support our development</p>
      </div>
      <div className="det__footer-links_div">
        <h4>California State University, Fullerton</h4>
        <p>800 N State College Blvd, Fullerton</p>
        <p>Group Detection</p>
      </div>
    </div>

    <div className="det__footer-copyright">
      <p>@2023 Detection. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
