import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import rocketsReducer from '../../redux/rockets/rockets';
import missionsReducer from '../../redux/missions/missions';
import Missions from '../Missions';

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

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('Missions component tests:', () => {
  it('Missions component renders correctly', () => {
    const missionsPage = renderer.create(
      <Provider store={store}>
        <Missions rockets={mockMissionsData} />
      </Provider>,
    ).toJSON();
    expect(missionsPage).toMatchSnapshot();
  });

  it('Number of rocket elements displayed should be 3', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions rockets={mockMissionsData} />
      </Provider>,
    );
    const page = container.querySelector('.missions');
    expect(page.childElementCount).toBe(3);
  });
});