import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMissions } from '../redux/missions/missions';

const Missions = (props) => {
  const [missions, setMissions] = useState([]);
  const missionsInit = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    const { fetchMissions, setFetchMissions } = props;
    if (!fetchMissions) {
      dispatch(getMissions());
      setFetchMissions(true);
    }
  }, [dispatch, props]);

  useEffect(() => {
    const { fetchMissions } = props;
    if (fetchMissions) {
      setMissions(missionsInit);
    }
  }, [missionsInit, props]);

  return (
    <div className="missions">
      {
            missions.map((mission) => (
              <div className="missions" key={mission.id}>
                {mission.description}
              </div>
            ))
        }
    </div>
  );
};

Missions.propTypes = {
  fetchMissions: PropTypes.bool.isRequired,
  setFetchMissions: PropTypes.func.isRequired,
};

export default Missions;
