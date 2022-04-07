import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missions';
import Mission from './Mission';
import './missions.css';

const Missions = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();

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
            wikipedia={mission.wikipedia}
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
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Missions;
