import React, { useState, useEffect } from 'react';
import {
  Route,
  Routes,
  Link,
  useLocation,
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
  const [rockets, setRockets] = useState([]);
  const [missions, setMissions] = useState([]);
  const [rocketsFetched, setRocketsFetched] = useState(false);
  const [missionsFetched, setMissionsFetched] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/profile':
        document.getElementById('profile').className = 'active';
        document.getElementById('missions').className = 'inactive';
        document.getElementById('rockets').className = 'inactive';
        break;
      case '/mission':
        document.getElementById('missions').className = 'active';
        document.getElementById('rockets').className = 'inactive';
        document.getElementById('profile').className = 'inactive';
        break;
      default:
        document.getElementById('rockets').className = 'active';
        document.getElementById('profile').className = 'inactive';
        document.getElementById('missions').className = 'inactive';
    }
  }, []);

  return (
    <div className="main">
      <div className="header">
        <img src="https://user-images.githubusercontent.com/20567503/161595022-dd594e3e-cadc-465c-8cbb-38d0467b2da5.png" alt="Website logo" id="logo" />
        <h1 className="title">Space Travellers&apos; Hub</h1>
        <ul className="menu-items">
          <li id="rockets">
            <Link to="/" onClick={toggleActive} className="link">Rockets</Link>
          </li>
          <li id="missions">
            <Link to="/mission" onClick={toggleActive} className="link">Missions</Link>
          </li>
          <li>
            <div className="vertical-line" />
          </li>
          <li id="profile">
            <Link to="/profile" onClick={toggleActive} className="link">My Profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/profile" element={<Profile missions={missions} rockets={rockets} />} />
        <Route path="/" element={<Rockets rocketsFetched={rocketsFetched} setRocketsFetched={setRocketsFetched} rockets={rockets} setRockets={setRockets} />} />
        <Route path="/mission" element={<Missions missions={missions} setMissions={setMissions} missionsFetched={missionsFetched} setMissionsFetched={setMissionsFetched} />} />
      </Routes>
    </div>
  );
};

export default Navigator;
