import './features.css';

import Feature from '../../components/feature/Feature';
import React from 'react';

const featuresData = [
  {
    title: 'VR-FPS',
    text: 'Players must physically crouch to navigate through levels, and peek around corners when fighting the enemy.',
  },
  {
    title: 'LIDAR Scanner',
    text: 'By emitting LIDAR rays in the direction it is facing, the player robot perceives its environment, and the colors of the particles change based on the texture of the objects.',
  },
  {
    title: 'Weapons',
    text: 'The player has access to various weapons such as rifles, shotguns, pistols, and knives to attack and shoot their enemies.',
  },
  {
    title: 'Music',
    text: 'The beat and intensity of the music being played control various elements such as the size of the LIDAR particles and the background color of the scene.',
  },
];

const Features = () => (
  <div className="det__features section__padding" id="features">
    <div className="det__features-heading">
      <h1 className="gradient__text">Watch our videos</h1>
      <p>and view our Github to get started</p>
    </div>
    <div className="det__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
