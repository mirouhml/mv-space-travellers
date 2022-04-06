import React from 'react';
import PropTypes from 'prop-types';
import './profiles.css';

const Profile = (props) => {
  let { missions } = props;
  missions = missions.filter((mission) => mission.joined === true);
  let empty = true;
  if (missions.length > 0) empty = false;

  return (
    <div className="container">
      <div className="profile">
        <div className="profile-missions">
          <h2>My Missions</h2>
          <ul className="my-missions">
            {empty && (
            <li>No Missions to display.</li>
            )}
            {
                missions.map((mission) => (
                  <li key={mission.id}>
                    <h3>{mission.name}</h3>
                  </li>
                ))
              }
          </ul>
        </div>
        <div className="rockets">My Rockets</div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Profile;
