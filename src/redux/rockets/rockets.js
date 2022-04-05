import fetchRockets from '../../services/FetchRockets';

const GET_ROCKETS = 'GET_ROCKETS';

const getRockets = () => async (dispatch) => {
  try {
    const res = await fetchRockets();
    const rockets = [];
    res.data.forEach((rocket) => {
      rockets.push({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        images: rocket.flickr_images,
        wikipedia: rocket.wikipedia,
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

const reducer = (rockets = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    default: return rockets;
  }
};

export { getRockets };
export default reducer;
