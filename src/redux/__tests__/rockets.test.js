import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, {reserveRocket, cancelReservation} from '../rockets/rockets';

const mockRocketsData = [
  {
    id: "rocket-1",
    image: "rocket-image-1",
    name: "Rocket 1",
    description: "rocket-description-1",
    reserved: false,
    wikipedia: "rocket-link-1",
  },
  {
    id: "rocket-2",
    image: "rocket-image-2",
    name: "Rocket 2",
    description: "rocket-description-2",
    reserved: false,
    wikipedia: "rocket-link-2",
  },
  {
    id: "rocket-3",
    image: "rocket-image-3",
    name: "Rocket 3",
    description: "rocket-description-3",
    reserved: false,
    wikipedia: "rocket-link-3",
  },
];

const mockGetRockets = () => ({
  type: 'GET_ROCKETS',
  rockets: mockRocketsData,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

describe('Tests for rockets redux file:', () => {
  it('Reducer returns empty array', () => {
    expect(store.getState()).toEqual([]);
  });

  it('Size of the array should be equal to 3', () => {
    store.dispatch(mockGetRockets());
    expect(store.getState().length).toEqual(3);
  });

  it('Reserve one rocket', () => {
    store.dispatch(mockGetRockets());
    store.dispatch(reserveRocket('rocket-1'));
    let rocketsArray = store.getState();
    rocketsArray = rocketsArray.filter((rocket) => rocket.reserved === true);
    expect(rocketsArray.length).toEqual(1);
  });

  it('Reserve three rockets', () => {
    store.dispatch(mockGetRockets());
    store.dispatch(reserveRocket('rocket-1'));
    store.dispatch(reserveRocket('rocket-2'));
    store.dispatch(reserveRocket('rocket-3'));
    let rocketsArray = store.getState();
    rocketsArray = rocketsArray.filter((rocket) => rocket.reserved === true);
    expect(rocketsArray.length).toEqual(3);
  });

  it('Cancel reservation for one rocket', () => {
    store.dispatch(mockGetRockets());
    store.dispatch(reserveRocket('rocket-1'));
    store.dispatch(reserveRocket('rocket-2'));
    store.dispatch(reserveRocket('rocket-3'));
    store.dispatch(cancelReservation('rocket-2'));
    let rocketsArray = store.getState();
    rocketsArray = rocketsArray.filter((rocket) => rocket.reserved === false);
    expect(rocketsArray[0].id).toEqual('rocket-2');
  });

  it('Cancel reservation for three rockets', () => {
    store.dispatch(mockGetRockets());
    store.dispatch(reserveRocket('rocket-1'));
    store.dispatch(reserveRocket('rocket-2'));
    store.dispatch(reserveRocket('rocket-3'));
    store.dispatch(cancelReservation('rocket-1'));
    store.dispatch(cancelReservation('rocket-2'));
    store.dispatch(cancelReservation('rocket-3'));
    let rocketsArray = store.getState();
    rocketsArray = rocketsArray.filter((rocket) => rocket.reserved === false);
    expect(rocketsArray.length).toEqual(3);
  });
});
