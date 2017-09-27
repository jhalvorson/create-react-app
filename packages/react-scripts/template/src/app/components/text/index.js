import React from 'react';
import { string } from 'prop-types';

export default function Text({ children }) {
  return (
    <p className="sig-paragraph">{children}</p>
  );
}

Text.propTypes = {
  children: string.isRequired,
};
