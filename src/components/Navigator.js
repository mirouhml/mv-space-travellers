/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Profile from './Profile';
import Rockets from './Rockets';
import Missions from './Missions';
import './Navigator.css';

const toggleActive = (e) => {
  e.target.parentNode.parentNode.childNodes.forEach((child) => {
    if (child.classList.contains('active')) {
      const child2 = child;
      child2.className = 'inactive';
    }
  });
  e.target.parentNode.className = 'active';
};

const Navigator = () => {
  const [rocketsFetched, setRocketsFetched] = useState(false);

  return (
    <Router>
      <div className="main">
        <div className="header">
          <img src="https://user-images.githubusercontent.com/20567503/161595022-dd594e3e-cadc-465c-8cbb-38d0467b2da5.png" alt="Website logo" id="logo" />
          <h1 className="title">Space Travellers&apos; Hub</h1>
          <ul className="menu-items">
            <li className="active">
              <Link to="/" id="rockets" onClick={toggleActive} className="link">Rockets</Link>
            </li>
            <li>
              <Link to="/mission" id="missions" onClick={toggleActive} className="link">Missions</Link>
            </li>
            <li>
              <div className="vertical-line" />
            </li>
            <li>
              <Link to="/profile" id="profile" onClick={toggleActive} className="link">My Profile</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Rockets rocketsFetched={rocketsFetched} setRocketsFetched={setRocketsFetched} />} />
          <Route path="/mission" element={<Missions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigator;
