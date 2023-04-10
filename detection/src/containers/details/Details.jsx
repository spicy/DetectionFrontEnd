import './details.css';

import Detail from '../../components/detail/Detail';
import React from 'react';

const detailsData = [
  {
    title: 'VR-FPS',
    text: 'Players must physically crouch to navigate through levels, and peek around corners when fighting the enemy.',
  },
  {
    title: 'LIDAR Scanner',
    text: 'The player robot perceives its environment by emitting LIDAR rays in the direction it is facing. The color of the LIDAR rays change based on the texture of the objects they land on.',
  },
  {
    title: 'Weapons',
    text: 'The player has access to various weapons such as rifles, shotguns, pistols, and knives to eliminate enemies.',
  },
  {
    title: 'Music',
    text: 'The beat and intensity of the music being played control various elements such as the size of the LIDAR particles and the background color of the scene.',
  },
];

const Details = () => (
  <div className="det__details section__padding" id="details">
    <div className="det__details-heading">
      <h1 className="gradient__text">Watch our videos</h1>
      <p>and view our Github to get started</p>
    </div>
    <div className="det__details-container">
      {detailsData.map((item, index) => (
        <Detail title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Details;
