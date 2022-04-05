import React from 'react';

const Mission = (mission) => {
  const { id, name, description } = mission;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td><p>NOT A MEMBER</p></td>
      <td><button type="button">Join Mission</button></td>
    </tr>
  );
};

export default Mission;
