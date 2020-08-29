import React from 'react';
import PropTypes from 'prop-types';

function TriviaCard(props) {
  const {
    _id, forwardText, backwardText, acquisitionCount, creator,
  } = props.trivia;

  /**
   * open trivia modal
   * @param {string} id id of trivia
   */
  function openTriviaModalHandler(id) {
    if (props.onClickTriviaCard != null) {
      props.onClickTriviaCard(id);
    }
  }

  return (
    <div className="card" onClick={() => { openTriviaModalHandler(_id) }}>
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
  onClickTriviaCard: PropTypes.func,
};

export default TriviaCard;
