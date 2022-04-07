import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import rocketsReducer from '../../redux/rockets/rockets';
import missionsReducer from '../../redux/missions/missions';
import Rockets from '../Rockets';

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

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('Rockets component tests:', () => {
  it('Rockets component renders correctly', () => {
    const rocketsPage = renderer.create(
      <Provider store={store}>
        <Rockets rockets={mockRocketsData} />
      </Provider>,
    ).toJSON();
    expect(rocketsPage).toMatchSnapshot();
  });

  it('Number of rocket elements displayed should be 3', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets rockets={mockRocketsData} />
      </Provider>
    );
    const page = container.querySelector('.rockets');
    expect(page.childElementCount).toBe(3);
  });
});