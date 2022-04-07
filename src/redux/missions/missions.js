import fetchMissions from '../../services/FetchMissions';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN = 'JOIN_MISSIONS';
const LEAVE = 'LEAVE_MISSIONS';

const getMissions = () => async (dispatch) => {
  try {
    const res = await fetchMissions();
    const missions = [];
    res.data.forEach((mission) => {
      missions.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        wikipedia: mission.wikipedia,
        joined: false,
      });
    });
    dispatch({
      type: GET_MISSIONS,
      missions,
    });
    return Promise.resolve(missions);
  } catch (err) {
    return Promise.reject(err);
  }
};

const joinMission = (id) => ({
  type: JOIN,
  id,
});

const leaveMission = (id) => ({
  type: LEAVE,
  id,
});

const reducer = (missions = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.missions;
    case JOIN:
      return missions.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: true };
      });
    case LEAVE:
      return missions.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: false };
      });
    default: return missions;
  }
};

export { getMissions, joinMission, leaveMission };
export default reducer;
