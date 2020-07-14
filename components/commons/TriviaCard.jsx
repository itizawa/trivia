import React from 'react';
import PropTypes from 'prop-types';

function TriviaCard({ trivia }) {
  const { forwardText, backwardText } = trivia;

  let src;
  try {
    src = `https://trivia-ogp.vercel.app/api/ogp?forwardText=${forwardText}&backwardText=${backwardText}`;
  }
  catch (error) {
    console.log(error);
  }

  return (
    <div className="card">
      <img src={src} className="card-img-top" alt="..." />
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
