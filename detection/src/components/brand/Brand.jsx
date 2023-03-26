import './brand.css';

import { oculus, steam, vive, vr } from './imports';

import React from 'react';

const Brand = () => (
  <div className="det__brand section__padding">
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

export default Brand;
