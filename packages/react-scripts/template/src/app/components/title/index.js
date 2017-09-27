import React from 'react';
import { string } from 'prop-types';

/**
 * Stateless / dumb component.
 * Here we use a standard function and not a React class
 * as our component does not require state.
 */
export default function Title({ children }) {
  return (
    <h1 className="sig-title">{children}</h1>
  );
}

/**
 * PropTypes allows us to catch bugs early with typechecking
 * As per our standards, all props must be typechecked
 * more details in the React Docs: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
 */
Title.propTypes = {
  children: string.isRequired,
};
