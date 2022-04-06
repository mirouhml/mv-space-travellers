import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMissions, joinMission, leaveMission } from '../redux/missions/missions';
import Mission from './Mission';
import './missions.css';

const Missions = (props) => {
  const { missions, setMissions } = props;
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

  const cancelMissionAction = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <table className="missions">
      <thead>
        <tr>
          <th className="bold-text">Mission</th>
          <th className="bold-text">Description</th>
          <th className="bold-text">Status</th>
          <th> </th>
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
            leaveMission={cancelMissionAction}
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
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  })).isRequired,
  setMissions: PropTypes.func.isRequired,
};

export default Missions;
