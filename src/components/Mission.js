import React from 'react';

const Mission = (mission) => {
  const {
    id,
    name,
    description,
    joinMission,
    joined,
  } = mission;

  const handleSubmit = (e) => {
    if (joined) {
      e.target.classList.removed('not-joined');
      e.target.classList.add('joined');
      joinMission(id);
    }
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td><p>NOT A MEMBER</p></td>
      <td><button className="btn" onClick={handleSubmit} type="button">Join Mission</button></td>
    </tr>
  );
};

export default Mission;
