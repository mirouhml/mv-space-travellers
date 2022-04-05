import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMissions, joinMission } from '../redux/missions/missions';
import Mission from './Mission';
import './missions.css';

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

  const joinMissionAction = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <table className="missions">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>.</th>
        </tr>
      </thead>
      {
      missions.map((mission) => (
        <tbody key={mission.id} className="mission-item">
          <Mission
            name={mission.name}
            id={mission.id}
            description={mission.description}
            joinMission={joinMissionAction}
            joined={mission.joined}
          />
        </tbody>
      ))
    }
    </table>
  );
};

Missions.propTypes = {
  missionsFetched: PropTypes.bool.isRequired,
  setMissionsFetched: PropTypes.func.isRequired,
};

export default Missions;
