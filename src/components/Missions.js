import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMissions } from '../redux/missions/missions';

const Missions = () => {
    const [missions, setMissions] = useState([]);
    const missionsInit = useSelector((state) => state.missions);
    const dispatch = useDispatch();
}