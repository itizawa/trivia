import React from 'react';
import PropTypes from 'prop-types';

function TriviaCard({ trivia }) {
  const {
    forwardText, backwardText, userName, acquisitionCount,
  } = trivia;

  return (
    <div className="card">
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
