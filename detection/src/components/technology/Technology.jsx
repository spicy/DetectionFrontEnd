import './technology.css';

import { oculus, steam, vive, vr } from './imports';

import React from 'react';

const Technology = () => (
  <div className="det__technology section__padding">
    <div>
      <img src={oculus} />
    </div>
    <div>
      <img src={steam} />
    </div>
    <div>
      <img src={vive} />
    </div>
    <div>
      <img src={vr} />
    </div>
  </div>
);

export default Technology;
