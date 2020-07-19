/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function ViewList({ width, height, fillColor }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" className="bi bi-view-list" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
    </svg>
  );
}

ViewList.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
};

ViewList.defaultProps = {
  width: '1em',
  height: '1em',
  fillColor: 'currentColor',
};

export default ViewList;
