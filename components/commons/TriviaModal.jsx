import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaModal() {
  const { triviaForModal, closeTriviaModal, isOpenTriviaModal } = TriviaListContainer.useContainer();
  const [count, setCount] = useState(0);
  const totalCount = count + triviaForModal?.acquisitionCount;

  function closeModalHandler() {
    setCount(0);
    if (closeTriviaModal != null) {
      closeTriviaModal();
    }
  }

  return (
    <Modal size="lg" isOpen={isOpenTriviaModal} toggle={closeModalHandler} className="trivia-modal">
      <ModalBody className="trivia-modal-body text-center p-5 d-flex align-items-center">
        <div className="trivia-scroll">
          <span>へぇ</span>
        </div>
        <div className="w-100">
          {triviaForModal?.forwardText}
          <br />
          {triviaForModal?.backwardText}
        </div>
      </ModalBody>
      <div className="d-flex p-3">
        <div className="col-4 align-bottom d-flex align-items-center">
          {count} へえ
        </div>
        <div className="col-4 text-center">
          <button
            type="button"
            className="btn btn-info btn-trivia text-snow rounded-circle"
            onClick={() => { setCount(count + 1) }}
            disabled={count >= 20}
          >
            へぇ
          </button>
        </div>
        <div className="col-4 text-right">
          by {triviaForModal?.userName}<br />
          合計 {totalCount} へえ
        </div>
      </div>
    </Modal>
  );
}

export default TriviaModal;
