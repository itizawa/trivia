import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';

function AdmirationCounter(props) {

  function pushAdmirationButtonHandler() {
    if (props.onClick != null) {
      props.onClick();
    }
  }

  if (props.isSkeleton) {
    return <Skeleton circle height={72} width={72} />;
  }

  return (
    <button
      type="button"
      className="btn btn-info btn-trivia text-snow rounded-circle"
      onClick={pushAdmirationButtonHandler}
      disabled={props.disabled}
    >
      へぇ
    </button>
  );
}

AdmirationCounter.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  isSkeleton: PropTypes.bool.isRequired,
};

export default AdmirationCounter;
