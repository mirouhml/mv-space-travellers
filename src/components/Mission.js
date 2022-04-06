import React from 'react';

const Mission = (mission) => {
  const {
    id,
    name,
    description,
    joinMission,
    leaveMission,
    joined,
  } = mission;

  return (
    <tr key={id}>
      <td className="bold-text">{name}</td>
      <td>{description}</td>
      <td>
        {joined && (
          <button type="submit" className="member-btn active-member">
            Active Member
          </button>
        )}
        {!joined && (
          <button type="submit" className="member-btn non-member">
            Not a Member
          </button>
        )}
      </td>
      <td>
        {!joined && (
          <button type="submit" className="mission-btn join-mission" onClick={() => joinMission(id)}>
            Join Mission
          </button>
        )}
        {joined && (
        <button type="submit" className="mission-btn leave-mission" onClick={() => leaveMission(id)}>
          Leave Mission
        </button>
        )}
      </td>
    </tr>
  );
};

export default Mission;
