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
        image: rocket.flickr_images[0],
        wikipedia: rocket.wikipedia,
        description: rocket.description,
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
