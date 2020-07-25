/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function ArrowInRight({ width, height, fillColor }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" className="bi bi-arrow-in-right" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z" />
      <path fillRule="evenodd" d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z" />
    </svg>
  );
}

ArrowInRight.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
};

ArrowInRight.defaultProps = {
  width: '1em',
  height: '1em',
  fillColor: 'currentColor',
};

export default ArrowInRight;
