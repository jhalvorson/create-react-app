import React from 'react';
import { string } from 'prop-types';
import './styles.scss';

/**
 * Stateless / dumb component.
 * Here we use a standard function and not a React class
 * as our component does not require state.
 */
export default function Title({ children }) {
  return (
    <h1>{children}</h1>
  )
}

Title.propTypes = {
  children: string.isRequired,
};
