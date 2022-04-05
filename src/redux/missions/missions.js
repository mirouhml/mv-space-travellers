import fetchMissions from '../../services/FetchMissions';

const GET_MISSIONS = 'GET_MISSIONS';

const getMissions = () => async (dispatch) => {
  try {
    const res = await fetchMissions();
    const missions = [];
    res.data.forEach((mission) => {
      missions.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
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

export default { getMissions };
// export default reducer;
