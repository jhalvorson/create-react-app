import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

it('renders without crashing', () => {
  shallow(<Button />);
});


it('should render some text', () => {
  const props = {
    onClick: () => {},
  };

  const wrapper = shallow(
    <Button onClick={props.onClick}>Press me!</Button>,
  );
  expect(wrapper).toMatchSnapshot();
});

/**
 * We can pass in click events using simulate
 */
it('renders the children passed in and can be pressed', () => {
  const props = {
    onClick: () => console.log('PRESSED'),
  };

  const wrapper = shallow(<Button onClick={props.onClick}>Press me!</Button>);
  expect(wrapper.prop('children')).toEqual('Press me!');
  wrapper.simulate('click');
});
