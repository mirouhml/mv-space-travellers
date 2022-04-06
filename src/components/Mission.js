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

  // const handleSubmit = (e) => {
  //   if (!joined) {
  //     e.target.classList.remove('leave');
  //     e.target.classList.add('joined');
  //     joinMission(id);
  //   } else {
  //     e.target.classList.remove('joined');
  //     e.target.classList.add('leave');
  //     leaveMission(id);
  //   }
  // };

  return (
    <tr key={id}>
      <td>{name}</td>
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
        {/* <button
          className="btn"
          onClick={handleSubmit}
          type="button"
        >
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button> */}
        {!joined && (
          <button type="submit" className="memberBtn join-mission" onClick={() => joinMission(id)}>
            Join Mission
          </button>
        )}
        {joined && (
        <button type="submit" className="memberBtn leave-mission" onClick={() => leaveMission(id)}>
          Leave Mission
        </button>
        )}
      </td>
    </tr>
  );
};

export default Mission;
