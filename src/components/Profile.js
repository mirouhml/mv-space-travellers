import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = (props) => {
  let { missions, rockets } = props;
  missions = missions.filter((mission) => mission.joined === true);
  rockets = rockets.filter((rocket) => rocket.reserved === true);
  let noRockets = true;
  let noMissions = true;
  if (missions.length > 0) noMissions = false;
  if (rockets.length > 0) noRockets = false;
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="missions-container">
          <h2>My Missions</h2>
          <ul className="my-missions">
            {noMissions && (
            <li>No Missions to display.</li>
            )}
            {
                missions.map((mission) => (
                  <li key={mission.id}>
                    <h3>{mission.name}</h3>
                    <a href={mission.wikipedia} alt="Wikipedia link" target="_blank" rel="noreferrer">Read more</a>

                  </li>
                ))
              }
          </ul>
        </div>
        <div className="rockets-container">
          <h2>My Rockets</h2>
          <ul className="my-rockets">
            {noRockets && (
              <li>No rockets to display.</li>
            )}
            {
              rockets.map((rocket) => (
                <li key={rocket.id}>
                  <h3>{rocket.name}</h3>
                  <a href={rocket.wikipedia} alt="Wikipedia link" target="_blank" rel="noreferrer">Read more</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  })).isRequired,
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Profile;
