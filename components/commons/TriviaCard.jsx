import React from 'react';
import PropTypes from 'prop-types';

function TriviaCard({ trivia }) {
  const { forwardText, backwardText } = trivia;

  return (
    <div className="card">
      <img
        width="100%"
        height="auto"
        src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${forwardText}&backwardText=${backwardText}`}
        className="trivia-card-img"
      />
      <div className="card-body">
        <p className="card-text">by {trivia.userName}</p>
      </div>
    </div>
  );
}

TriviaCard.propTypes = {
  trivia: PropTypes.object.isRequired,
};

export default TriviaCard;
