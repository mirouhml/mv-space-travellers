import React from 'react';

const Mission = (mission) => {
  const { id, name, description } = mission;
  return (
    <table className="mission">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          {/* <th>Status</th> */}
        </tr>
      </thead>
      <tbody>
        <tr key={id}>
          <td>{name}</td>
          <td>{description}</td>
        </tr>
      </tbody>

    </table>

  );
};

export default Mission;
