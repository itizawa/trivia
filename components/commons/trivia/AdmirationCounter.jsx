import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';

function AdmirationCounter(props) {
  console.log(props);
  if (props?.count == null) {
    return <Skeleton width={25} />;
  }

  return <p>{props.count}</p>;
}

AdmirationCounter.propTypes = {
  count: PropTypes.number,
};

export default AdmirationCounter;
