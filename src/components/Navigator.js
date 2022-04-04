/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Profile from './Profile';
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

const Navigator = () => (
  <Router>
    <div className="main">
      <div className="header">
        <img src="https://user-images.githubusercontent.com/20567503/161595022-dd594e3e-cadc-465c-8cbb-38d0467b2da5.png" alt="Website logo" id="logo" />
        <h1 className="title">Space Travellers&apos; Hub</h1>
        <ul className="menu-items">
          <li>
            <a href="#" onClick={toggleActive} className="link">Rockets</a>
          </li>
          <li>
            <a href="#" onClick={toggleActive} className="link">Missions</a>
          </li>
          <li>
            <div className="vertical-line" />
          </li>
          <li className="active">
            <Link to="/" id="profile" onClick={toggleActive} className="link">My Profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  </Router>
);

export default Navigator;
