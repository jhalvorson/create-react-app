import React from 'react';
import { func, string } from 'prop-types';

export default function Button({ onClick, children }) {
  return (
    <button className="button button-primary" onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
  children: string.isRequired,
};
