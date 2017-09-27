import React from 'react';
// TODO: propTypes

export default function Container({ children, fullWidth }) {
  return (
    <section className={'container'}>{children}</section>
  );
}
