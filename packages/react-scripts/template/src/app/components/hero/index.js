import React from 'react';
import { node } from 'prop-types';

/**
 * Stateless / dumb component.
 * Here we use a standard function and not a React class
 * as our component does not require state.
 */
export default function Hero({ children }) {
  return (
    <header className="sig-hero">{children}</header>
  );
}

Hero.propTypes = {
  children: node.isRequired,
};
