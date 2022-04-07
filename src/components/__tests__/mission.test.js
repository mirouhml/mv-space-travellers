import React from 'react';
import renderer from 'react-test-renderer';
import Mission from '../Mission';

describe('OneMission', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Mission
        joined={false}
        id="123"
        name="name"
        description="desc"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
