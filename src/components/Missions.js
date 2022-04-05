import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMissions } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = (props) => {
  const [missions, setMissions] = useState([]);
  const missionsInit = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    const { missionsFetched, setMissionsFetched } = props;
    if (!missionsFetched) {
      dispatch(getMissions());
      setMissionsFetched(true);
    }
  }, [dispatch, props]);

  useEffect(() => {
    const { missionsFetched } = props;
    if (missionsFetched) {
      setMissions(missionsInit);
    }
  }, [missionsInit, props]);

  return (
    <ul className="missions">
      {
      missions.map((mission) => (
        <li key={mission.id} className="mission-item">
          <Mission name={mission.name} id={mission.id} description={mission.description} />
        </li>
      ))
    }
    </ul>
  );
};

Missions.propTypes = {
  missionsFetched: PropTypes.bool.isRequired,
  setMissionsFetched: PropTypes.func.isRequired,
};

export default Missions;
