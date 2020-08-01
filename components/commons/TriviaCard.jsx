import React from 'react';
import PropTypes from 'prop-types';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaCard({ trivia }) {
  const {
    forwardText, backwardText, acquisitionCount,
  } = trivia;
  const { creator } = trivia;
  const { openTriviaModal } = TriviaListContainer.useContainer();


  return (
    <div className="card" onClick={() => { openTriviaModal(trivia) }}>
      <img
        width="100%"
        height="auto"
        src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${forwardText}&backwardText=${backwardText}`}
        className="trivia-card-img"
      />
      <div className="card-body d-flex">
        <img height="24px" className="rounded-circle bg-white border mr-2" src={creator?.image} />
        by {creator?.name}
        <span className="ml-auto">
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
