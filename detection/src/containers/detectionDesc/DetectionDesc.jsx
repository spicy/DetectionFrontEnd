import './DetectionDesc.css';

import Feature from '../../components/feature/Feature';
import React from 'react';

const DetectionDesc = () => (
  <div className="det__DetectionDesc section__margin" id="whatis">
    <div className="det__DetectionDesc-feature">
      <Feature title="What is Detection?" text="Detection is a thrilling Virtual Reality experience that aims to bring the chaos of a roguelike and a VR environment scanning experience together." />
    </div>
    <div className="det__DetectionDesc-heading">
      <h1 className="gradient__text">It's a high-octane FPS inspired by Hotline-Miami.</h1>
      <p>Explore the Beta</p>
    </div>
    <div className="det__DetectionDesc-container">
      <Feature title="Objective" text="Users will experience a captivating and violent first person shooter game in Virtual Reality." />
      <Feature title="Gameplay" text="The user navigates and engages in close combat and brutal firefights with enemies." />
      <Feature title="Story" text="In 2078, a secretive collective has initiated bouts of terrorism throughout a divided nation using AI robots." />
    </div>
  </div>
);

export default DetectionDesc;
