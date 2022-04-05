import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = (props) => {
  let { rockets } = props;
  rockets = rockets.filter((rocket) => rocket.reserved === true);
  let empty = true;
  if (rockets.length > 0) empty = false;
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-missions">My Missions</div>
        <div className="profile-rockets">
          <h2>My Rockets</h2>
          <ul className="my-rockets">
            {empty && (
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
