import React from 'react';
import './mission.css';

const Mission = (mission) => {
  const { id, name, description } = mission;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td><p>NOT A MEMBER</p></td>
      <td><button className="btn" type="button">Join Mission</button></td>
    </tr>
  );
};

export default Mission;
