import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Profile from'./Profile';
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
        <h1>Space Travellers' Hub</h1>
        <ul className="menu-items">
          <li>
            <a href="#" onClick={toggleActive} className="link">Rockets</a>
          </li>
          <li>
            <a href="#" onClick={toggleActive} className="link">Missions</a>
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
