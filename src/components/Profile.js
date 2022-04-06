import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  let { missions } = props;
  missions = missions.filter((mission) => mission.reserved === true);
  let empty = true;
  if (missions.length <= 1) empty = false;

  return (
    <div className="container">
      <div className="profile">
        <div className="rockets">My Rockets</div>
        <div className="missions">
          <h2>My Missions</h2>
          <ul className="joined-missions">
           <li>Missions</li>
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
    reserved: PropTypes.bool.isRequired,
  })).isRequired,
};
