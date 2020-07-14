import React from 'react';
import PropTypes from 'prop-types';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaCard({ trivia }) {
  const {
    forwardText, backwardText, userName, acquisitionCount,
  } = trivia;

  const { openTriviaModal } = TriviaListContainer.useContainer();

  return (
    <div className="card" onClick={() => { openTriviaModal(trivia) }}>
      <img
        width="100%"
        height="auto"
        src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${forwardText}&backwardText=${backwardText}`}
        className="trivia-card-img"
      />
      <div className="card-body text-right">
        by {userName}
        <span className="ml-2">
          {acquisitionCount} へえ
        </span>
      </div>
    </div>
  );
}

TriviaCard.propTypes = {
  trivia: PropTypes.object.isRequired,
};

export default TriviaCard;
