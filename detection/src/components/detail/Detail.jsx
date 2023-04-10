import './detail.css';

import React from 'react';

const Detail = ({ title, text }) => (
  <div className="det__details-cont_detail">
    <div className="det__details-cont_detail-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="det__details-cont_detail-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Detail;
