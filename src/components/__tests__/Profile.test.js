import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../Profile';

const mockRocketsData = [
  {
    id: 'rocket-1',
    image: 'rocket-image-1',
    name: 'Rocket 1',
    description: 'rocket-description-1',
    reserved: false,
    wikipedia: 'rocket-link-1',
  },
  {
    id: 'rocket-2',
    image: 'rocket-image-2',
    name: 'Rocket 2',
    description: 'rocket-description-2',
    reserved: false,
    wikipedia: 'rocket-link-2',
  },
  {
    id: 'rocket-3',
    image: 'rocket-image-3',
    name: 'Rocket 3',
    description: 'rocket-description-3',
    reserved: false,
    wikipedia: 'rocket-link-3',
  },
];

const mockMissionsData = [
  {
    id: 'mission-1',
    image: 'mission-image-1',
    name: 'mission 1',
    description: 'mission-description-1',
    joined: false,
    wikipedia: 'mission-link-1',
  },
  {
    id: 'mission-2',
    image: 'mission-image-2',
    name: 'mission 2',
    description: 'mission-description-2',
    joined: false,
    wikipedia: 'mission-link-2',
  },
  {
    id: 'mission-3',
    image: 'mission-image-3',
    name: 'mission 3',
    description: 'mission-description-3',
    joined: false,
    wikipedia: 'mission-link-3',
  },
];

describe('Profile component tests:', () => {
  it('Component renders correctly', () => {
    const profile = renderer.create(
      <Profile
        missions={mockMissionsData}
        rockets={mockRocketsData}
      />,
    ).toJSON();
    expect(profile).toMatchSnapshot();
  });

  it('No missions message displayed correctly', () => {
    render(
      <Profile
        missions={mockMissionsData}
        rockets={mockRocketsData}
      />,
    );
    expect(screen.getByText('No Missions to display.')).toBeInTheDocument();
  });

  it('No rockets message displayed correctly', () => {
    render(
      <Profile
        missions={mockMissionsData}
        rockets={mockRocketsData}
      />,
    );
    expect(screen.getByText('No rockets to display.')).toBeInTheDocument();
  });

  it('Reserve some rockets and check if they are displayed correctly', () => {
    const reservedRockets = mockRocketsData.map((rocket) => ({ ...rocket, reserved: true }));
    const { container } = render(
      <Profile
        missions={mockMissionsData}
        rockets={reservedRockets}
      />,
    );
    expect(container.querySelector('.my-rockets').childElementCount).toBe(3);
  });

  it('Join some missions and check if they are displayed correctly', () => {
    const reservedMissions = mockMissionsData.map((mission) => ({ ...mission, joined: true }));
    const { container } = render(
      <Profile
        missions={reservedMissions}
        rockets={mockRocketsData}
      />,
    );
    expect(container.querySelector('.my-missions').childElementCount).toBe(3);
  });
});
