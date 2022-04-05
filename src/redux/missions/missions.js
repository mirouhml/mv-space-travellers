import fetchMissions from '../../services/FetchMissions';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN = 'JOIN_MISSIONS';
const CANCEL = 'CANCEL_MISSIONS';

const getMissions = () => async (dispatch) => {
  try {
    const res = await fetchMissions();
    const missions = [];
    res.data.forEach((mission) => {
      missions.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
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

const reducer = (missions = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.missions;
    case JOIN:
      return missions.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: true };
      });
    case CANCEL:
      return missions.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: false };
      });
    default: return missions;
  }
};

export { getMissions, joinMission };
export default reducer;
