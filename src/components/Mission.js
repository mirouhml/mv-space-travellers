import React from 'react';

const Mission = (mission) => {
  const {
    id,
    name,
    description,
    joinMission,
    cancelMission,
    joined,
  } = mission;

  const handleSubmit = (e) => {
    if (!joined) {
      e.target.classList.remove('disjoined');
      e.target.classList.add('joined');
      joinMission(id);
    } else {
      e.target.classList.remove('joined');
      e.target.classList.add('disjoined');
      cancelMission(id);
    }
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td><p>NOT A MEMBER</p></td>
      <td>
        <button
          className="btn"
          onClick={handleSubmit}
          type="button"
        >
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

export default Mission;
