import React from 'react';
// import { useTable } from 'react-table';

const Mission = (mission) => {
  const { id, name, description } = mission;
  return (
    <table className="mission">
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>Status</th>
      </tr>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
      </tr>

    </table>
  );
};

export default Mission;
