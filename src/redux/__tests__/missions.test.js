import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, { joinMission, leaveMission } from '../missions/missions';

const mockMissionsData = [
  {
    id: 'mission-1',
    name: 'mission 1',
    description: 'mission-description-1',
    joined: false,
    wikipedia: 'mission-link-1',
  },
  {
    id: 'mission-2',
    name: 'mission 2',
    description: 'mission-description-2',
    joined: false,
    wikipedia: 'mission-link-2',
  },
  {
    id: 'mission-3',
    name: 'mission 3',
    description: 'mission-description-3',
    joined: false,
    wikipedia: 'mission-link-3',
  },
];

const mockGetMissions = () => ({
  type: 'GET_MISSIONS',
  missions: mockMissionsData,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

describe('Tests for missions redux file:', () => {
  it('Reducer returns empty array', () => {
    expect(store.getState()).toEqual([]);
  });

  it('Size of the array should be equal to 3', () => {
    store.dispatch(mockGetMissions());
    expect(store.getState().length).toEqual(3);
  });

  it('join one mission', () => {
    store.dispatch(mockGetMissions());
    store.dispatch(joinMission('mission-1'));
    let missionsArray = store.getState();
    missionsArray = missionsArray.filter((mission) => mission.joined === true);
    expect(missionsArray.length).toEqual(1);
  });

  it('join three missions', () => {
    store.dispatch(mockGetMissions());
    store.dispatch(joinMission('mission-1'));
    store.dispatch(joinMission('mission-2'));
    store.dispatch(joinMission('mission-3'));
    let missionsArray = store.getState();
    missionsArray = missionsArray.filter((mission) => mission.joined === true);
    expect(missionsArray.length).toEqual(3);
  });

  it('Cancel reservation for one mission', () => {
    store.dispatch(mockGetMissions());
    store.dispatch(joinMission('mission-1'));
    store.dispatch(joinMission('mission-2'));
    store.dispatch(joinMission('mission-3'));
    store.dispatch(leaveMission('mission-2'));
    let missionsArray = store.getState();
    missionsArray = missionsArray.filter((mission) => mission.joined === false);
    expect(missionsArray[0].id).toEqual('mission-2');
  });

  it('Cancel reservation for three missions', () => {
    store.dispatch(mockGetMissions());
    store.dispatch(joinMission('mission-1'));
    store.dispatch(joinMission('mission-2'));
    store.dispatch(joinMission('mission-3'));
    store.dispatch(leaveMission('mission-1'));
    store.dispatch(leaveMission('mission-2'));
    store.dispatch(leaveMission('mission-3'));
    let missionsArray = store.getState();
    missionsArray = missionsArray.filter((mission) => mission.joined === false);
    expect(missionsArray.length).toEqual(3);
  });
});
