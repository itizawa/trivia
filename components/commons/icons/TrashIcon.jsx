/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * bootstrap icon
 * https://icons.getbootstrap.com/icons/trash-fill/
 */
function TrashIcon({ width, height, fillColor }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" className="bi bi-house-square" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
    </svg>
  );
}

TrashIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
};

TrashIcon.defaultProps = {
  width: '1em',
  height: '1em',
  fillColor: 'currentColor',
};

export default TrashIcon;
