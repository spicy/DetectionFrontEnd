import './DetectionDesc.css';

import Feature from '../../components/feature/Feature';
import React from 'react';

const DetectionDesc = () => (
  <div className="det__DetectionDesc section__margin" id="whatis">
    <div className="det__DetectionDesc-feature">
      <Feature title="What is Detection?" text="Detection is a thrilling Virtual Reality experience that aims to bring the chaos of a roguelike and a VR environment scanning experience together." />
    </div>
    <div className="det__DetectionDesc-heading">
      <h1 className="gradient__text">An intense Hotline-Miami esque VR-FPS</h1>
      <p>Explore the Beta</p>
    </div>
    <div className="det__DetectionDesc-container">
      <Feature title="Objective" text="Users will experience a captivating and violent first person shooter game in Virtual Reality." />
      <Feature title="Gameplay" text="The user navigates and engages in close combat and brutal firefights with enemies populated throughout multiple levels." />
      <Feature title="Story" text="In 2078, a secretive and voiceless collective has initiated the dismantling of the corrupt structures of society. Their strategy involves directing and overseeing the actions of an AI robot." />
    </div>
  </div>
);

export default DetectionDesc;
