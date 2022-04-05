import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMissions } from '../redux/missions/missions';

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
    <div className="missions">
      {
            missions.map((mission) => (
              <div className="missions" key={mission.id}>
                {mission.name}
              </div>
            ))
        }
    </div>
  );
};

Missions.propTypes = {
  missionsFetched: PropTypes.bool.isRequired,
  setMissionsFetched: PropTypes.func.isRequired,
};

export default Missions;
