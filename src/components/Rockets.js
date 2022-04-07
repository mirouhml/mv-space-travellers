import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';
import Rocket from './Rocket';
import './Rockets.css';

const Rockets = (props) => {
  const { rockets } = props;
  const dispatch = useDispatch();
  const reserveRocketAction = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservationAction = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <ul className="rockets">
      {
        rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <Rocket
              id={rocket.id}
              name={rocket.name}
              image={rocket.image}
              description={rocket.description}
              reserveRocket={reserveRocketAction}
              cancelReservation={cancelReservationAction}
              reserved={rocket.reserved}
            />
          </li>
        ))
      }
    </ul>
  );
};

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Rockets;
