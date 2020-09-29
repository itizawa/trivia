import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';

function TriviaList(props) {
  const { trivias } = props;
  const [triviaForModal, setTriviaForModal] = useState(null);

  /**
   * open trivia modal
   * @param {string} id id of trivia
   */
  function onClickTriviaCard(id) {
    setTriviaForModal(id);
  }

  /**
   * close trivia modal
   * @param {string} id id of trivia
   */
  function onCloseModal() {
    setTriviaForModal(null);
  }

  return (
    <div className="row">
      {trivias.map((trivia, index) => {
        return (
          <div className={`mb-3 ${index === 0 ? 'col-md-12' : 'col-md-6'}`} key={trivia._id}>
            <TriviaCard trivia={trivia} onClickTriviaCard={onClickTriviaCard} />
            <TriviaModal trivia={trivia} isOpen={triviaForModal === trivia._id} onClose={onCloseModal} />
          </div>
        );
      })}
    </div>
  );

}

TriviaList.propTypes = {
  tagId: PropTypes.string,
  index: PropTypes.number,
  trivias: PropTypes.array.isRequired,
};

export default TriviaList;
