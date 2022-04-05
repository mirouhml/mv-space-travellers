import fetchRockets from '../../services/FetchRockets';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE = 'RESERVE';

const getRockets = () => async (dispatch) => {
  try {
    const res = await fetchRockets();
    const rockets = [];
    res.data.forEach((rocket) => {
      rockets.push({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        image: rocket.flickr_images[0],
        wikipedia: rocket.wikipedia,
        description: rocket.description,
        reserved: false,
      });
    });
    dispatch({
      type: GET_ROCKETS,
      rockets,
    });
    return Promise.resolve(rockets);
  } catch (err) {
    return Promise.reject(err);
  }
};

const reserveRocket = (id) => ({
  type: RESERVE,
  id,
});

const reducer = (rockets = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    case RESERVE:
      return rockets.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    default: return rockets;
  }
};

export { getRockets, reserveRocket };
export default reducer;
