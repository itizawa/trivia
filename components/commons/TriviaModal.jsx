import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaModal() {
  const { triviaForModal, closeTriviaModal, isOpenTriviaModal } = TriviaListContainer.useContainer();
  const creator = triviaForModal?.creator;

  const [count, setCount] = useState(0);
  const [flowingWords, setFlowingWords] = useState([]);
  const totalCount = count + triviaForModal?.acquisitionCount;

  function closeModalHandler() {
    setCount(0);
    if (closeTriviaModal != null) {
      setFlowingWords([]);
      closeTriviaModal();
    }
  }

  function generateFlowingWords() {
    const marginTop = Math.random() * Math.floor(50);
    const __flowingWords = flowingWords;
    __flowingWords.push(
      <div key={count} className="trivia-scroll" style={{ marginTop: `${marginTop}%` }}>
        <span>へぇ</span>
      </div>,
    );
    setFlowingWords(__flowingWords);
  }

  function pushHeButtonHandler() {
    setCount(count + 1);
    generateFlowingWords();
  }

  return (
    <Modal size="lg" isOpen={isOpenTriviaModal} toggle={closeModalHandler} className="trivia-modal">
      <ModalBody className="p-0 trivia-modal-body">
        {flowingWords}
        <img
          width="100%"
          height="auto"
          src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${triviaForModal?.forwardText}&backwardText=${triviaForModal?.backwardText}&isShow=true`}
          className="trivia-card-img"
        />
      </ModalBody>
      <div className="d-flex p-3">
        <div className="col-4 align-bottom d-flex align-items-center">
          {count} へえ
        </div>
        <div className="col-4 text-center">
          <button
            type="button"
            className="btn btn-info btn-trivia text-snow rounded-circle"
            onClick={pushHeButtonHandler}
            disabled={count >= 20}
          >
            へぇ
          </button>
        </div>
        <div className="col-4 text-right">
          {creator?.name}<br />
          合計 {totalCount} へえ
        </div>
      </div>
    </Modal>
  );
}

export default TriviaModal;
