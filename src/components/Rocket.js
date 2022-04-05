/* eslint-disable prefer-template */

import React from 'react';
import './Rocket.css';

const Rocket = (rocket) => {
  const {
    id,
    name,
    image,
    description,
    reserveRocket,
    cancelReservation,
    reserved,
  } = rocket;
  return (
    <div className="rocket">
      <img src={image} alt={name} className="rocket-image" />
      <div className="rocket-info">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">{description}</p>
        <button
          type="button"
          className={(reserved ? 'rocket-button clicked' : 'rocket-button unclicked')}
          onClick={(e) => {
            if (!reserved) {
              e.target.classList.remove('unclicked');
              e.target.classList.add('clicked');
              reserveRocket(id);
            } else {
              e.target.classList.remove('clicked');
              e.target.classList.add('unclicked');
              cancelReservation(id);
            }
          }}
        >
          {(reserved ? 'Cancel Reservation' : 'Reserve Rocket')}
        </button>
      </div>
    </div>
  );
};

export default Rocket;
