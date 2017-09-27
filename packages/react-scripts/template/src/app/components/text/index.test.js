import React from 'react';
import { shallow } from 'enzyme';
import Text from './';

/**
 * This is an example smoke test, it just renders the component
 */
it('renders without crashing', () => {
  shallow(<Text />);
});

/**
 * Jest has snapshotting built in 🔥
 */
it('should render some text', () => {
  const wrapper = shallow(
    <Text>Hello Jest!</Text>,
  );
  expect(wrapper).toMatchSnapshot();
});

/**
 * Testing props is pretty straight forward to
 */
it('renders the children passed in', () => {
  const wrapper = shallow(<Text>signal4Lyf</Text>);
  expect(wrapper.prop('children')).toEqual('signal4Lyf');
});
