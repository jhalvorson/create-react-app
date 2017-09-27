import React from 'react';
import { shallow } from 'enzyme';
import Hero from './';

/**
 * This is an example smoke test, it just renders the component
 */
it('renders without crashing', () => {
  shallow(<Hero />);
});