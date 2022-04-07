import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import { getMissions } from '../redux/missions/missions';
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
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const profile = document.getElementById('profile');
    const missions = document.getElementById('missions');
    const rockets = document.getElementById('rockets');

    if (profile && missions && rockets) {
      switch (location.pathname) {
        case '/profile':
          profile.className = 'active';
          missions.className = 'inactive';
          rockets.className = 'inactive';
          break;
        case '/mission':
          missions.className = 'active';
          rockets.className = 'inactive';
          profile.className = 'inactive';
          break;
        default:
          rockets.className = 'active';
          profile.className = 'inactive';
          missions.className = 'inactive';
      }
    }
    dispatch(getRockets());
    dispatch(getMissions());
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
        <Route path="/" element={<Rockets rockets={rockets} />} />
        <Route path="/mission" element={<Missions missions={missions} />} />
      </Routes>
    </div>
  );
};

export default Navigator;
