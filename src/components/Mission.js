import React from 'react';

const Mission = (mission) => {
  const { id, name, description } = mission;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td><button type="button">NOT A MEMBER</button></td>
      <td><button type="button">Join Mission</button></td>
    </tr>
  );
};

export default Mission;
