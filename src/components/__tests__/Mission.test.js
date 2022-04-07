import React from 'react';
import renderer from 'react-test-renderer';
import Mission from '../Mission';

describe('Mission component tests:', () => {
  it('Component renders correctly', () => {
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