import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';
import './Rockets.css';

const Rockets = (props) => {
  const [rockets, setRockets] = useState([]);
  const rocketsInit = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    const { rocketsFetched, setRocketsFetched } = props;
    if (!rocketsFetched) {
      dispatch(getRockets());
      setRocketsFetched(true);
    }
  }, [dispatch, props]);

  useEffect(() => {
    const { rocketsFetched } = props;
    if (rocketsFetched) {
      setRockets(rocketsInit);
    }
  }, [rocketsInit, props]);

  return (
    <ul className="rockets">
      {
        rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <Rocket name={rocket.name} image={rocket.image} description={rocket.description} />
          </li>
        ))
      }
    </ul>
  );
};

Rockets.propTypes = {
  rocketsFetched: PropTypes.bool.isRequired,
  setRocketsFetched: PropTypes.func.isRequired,
};

export default Rockets;
