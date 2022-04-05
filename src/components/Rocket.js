import React from 'react';
import './Rocket.css';

const Rocket = (rocket) => {
  const { name, image, description } = rocket;
  return (
    <div className="rocket">
      <img src={image} alt={name} className="rocket-image" />
      <div className="rocket-info">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">{description}</p>
        <button type="button" className="rocket-button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
