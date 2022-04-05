import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = (props) => {
  const [rockets, setRockets] = useState([]);
  const rocketsInit = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    const [rocketsFetched, setRocketsFetched] = props;
    if (!rocketsFetched) {
      dispatch(getRockets());
      setRocketsFetched(true);
    }
  }, [dispatch, props]);

  useEffect(() => {
    const [rocketsFetched] = props;
    if (rocketsFetched) {
      setRockets(rocketsInit);
    }
  }, [rocketsInit, props]);

  return (
    <div>
      {
        console.log(rockets)
      }
      Rockets
    </div>
  );
};

export default Rockets;
