import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import { getMissions } from '../redux/missions/missions';
import Profile from './Profile';
import Rockets from './Rockets';
import Missions from './Missions';
import './Navigator.css';

const Navigator = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, []);

  return (
    <div className="main">
      <nav className="header">
        <img src="https://user-images.githubusercontent.com/20567503/161595022-dd594e3e-cadc-465c-8cbb-38d0467b2da5.png" alt="Website logo" id="logo" />
        <h1 className="title">Space Travellers&apos; Hub</h1>
        <ul className="menu-items">
          <li id="rockets">
            <NavLink to="/" className="link">Rockets</NavLink>
          </li>
          <li id="missions">
            <NavLink to="/mission" className="link">Missions</NavLink>
          </li>
          <li>
            <div className="vertical-line" />
          </li>
          <li id="profile">
            <NavLink to="/profile" className="link">My Profile</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile missions={missions} rockets={rockets} />} />
        <Route path="/" element={<Rockets rockets={rockets} />} />
        <Route path="/mission" element={<Missions missions={missions} />} />
      </Routes>
    </div>
  );
};

export default Navigator;
