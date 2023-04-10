import './description.css';

import Detail from '../../components/detail/Detail';
import React from 'react';

const Description = () => (
  <div className="det__Description section__margin" id="whatis">
    <div className="det__Description-detail">
      <Detail title="What is Detection?" text="Detection is a thrilling Virtual Reality experience that aims to bring the chaos of a roguelike and a VR environment scanning experience together." />
    </div>
    <div className="det__Description-heading">
      <h1 className="gradient__text">It's a high-octane FPS inspired by Hotline-Miami.</h1>
      <p>Explore the Beta</p>
    </div>
    <div className="det__Description-container">
      <Detail title="Objective" text="Users will experience a captivating and violent first person shooter game in Virtual Reality." />
      <Detail title="Gameplay" text="The user navigates and engages in close combat and brutal firefights with enemies." />
      <Detail title="Story" text="In 2078, a secretive collective has initiated bouts of terrorism throughout a divided nation using AI robots." />
    </div>
  </div>
);

export default Description;
