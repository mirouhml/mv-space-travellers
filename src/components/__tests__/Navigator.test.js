import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from '../../redux/rockets/rockets';
import missionsReducer from '../../redux/missions/missions';
import App from '../../App';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('Navigator component tests:', () => {
  it('Navigator component renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const home = container.querySelector('.header');
    expect(home).toBeInTheDocument();
  });

  it('Checking if the Rockets page is the landing page', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const page = container.querySelector('#rockets');
    expect(page).toBeInTheDocument();
  });

  it('Clicking on Rockets and getting the Rockets page', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByText('Rockets'));
    const page = container.querySelector('.rockets');
    expect(page).toBeInTheDocument();
  });

  it('Clicking on Missions and getting the Missions page', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByText('Missions'));
    const page = container.querySelector('.missions');
    expect(page).toBeInTheDocument();
  });

  it('Clicking on My Profile and getting the profile page', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByText('My Profile'));
    const page = container.querySelector('.profile');
    expect(page).toBeInTheDocument();
  });
});