import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  let { missions } = props;
  missions = missions.filter((mission) => mission.reserved === true);
  let empty = true;
  if (missions.length <= 1) empty = false;

  return (
   
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
