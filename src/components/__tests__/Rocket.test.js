import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import rocketsReducer from '../../redux/rockets/rockets';
import missionsReducer from '../../redux/missions/missions';
import Rocket from '../Rocket';
import Rockets from '../Rockets';
import App from '../../App';

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

const mockGetRockets = () => ({
  type: 'GET_ROCKETS',
  rockets: mockRocketsData,
});

store.dispatch(mockGetRockets());

describe('Rocket component tests:', () => {
  it('Component renders correctly', () => {
    const reserveRocketAction = jest.fn();
    const cancelReservationAction = jest.fn();
    const rocket = renderer.create(
      <Rocket
        id={mockRocketsData[0].id}
        name={mockRocketsData[0].name}
        image={mockRocketsData[0].image}
        description={mockRocketsData[0].description}
        reserveRocket={reserveRocketAction}
        cancelReservation={cancelReservationAction}
        reserved={mockRocketsData[0].reserved}
      />,
    ).toJSON();
    expect(rocket).toMatchSnapshot();
  });

  it('Display name of the rocket correctly', () => {
    const reserveRocketAction = jest.fn();
    const cancelReservationAction = jest.fn();
    const { container } = render(
      <Rocket
        id={mockRocketsData[0].id}
        name={mockRocketsData[0].name}
        image={mockRocketsData[0].image}
        description={mockRocketsData[0].description}
        reserveRocket={reserveRocketAction}
        cancelReservation={cancelReservationAction}
        reserved={mockRocketsData[0].reserved}
      />
    );
    const name = container.querySelector('.rocket-name');
    expect(name.textContent).toEqual(mockRocketsData[0].name);
  });

  it('Display image of the rocket correctly', () => {
    const reserveRocketAction = jest.fn();
    const cancelReservationAction = jest.fn();
    const { container } = render(
      <Rocket
        id={mockRocketsData[0].id}
        name={mockRocketsData[0].name}
        image={mockRocketsData[0].image}
        description={mockRocketsData[0].description}
        reserveRocket={reserveRocketAction}
        cancelReservation={cancelReservationAction}
        reserved={mockRocketsData[0].reserved}
      />
    );
    const image = container.querySelector('.rocket-image');
    expect(image.src).toEqual(`http://localhost/${mockRocketsData[0].image}`);
  });

  it('Reserve the first rocket correctly (check if badge exist)', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getAllByText('Reserve Rocket')[0]);
    expect(screen.getByText('Reserved')).toBeInTheDocument();
  });

  it('Reserve the first rocket correctly (check if button changed)', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getAllByText('Cancel Reservation')[0]);
    fireEvent.click(screen.getAllByText('Reserve Rocket')[0]);
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });

  it('Cancel reservation for the first rocket correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getAllByText('Cancel Reservation')[0]);
    expect(store.getState().rockets[0].reserved).toEqual(false);
  });
});