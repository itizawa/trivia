import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaModal() {
  const { triviaForModal, closeTriviaModal } = TriviaListContainer.useContainer();

  return (
    <Modal size="lg" isOpen={triviaForModal != null} toggle={closeTriviaModal} className="trivia-modal">
      <ModalBody className="trivia-modal-body text-center p-5 d-flex align-items-center">
        <div className="w-100">
          {triviaForModal?.forwardText}
          <br />
          {triviaForModal?.backwardText}
        </div>
      </ModalBody>
      <div className="d-flex p-3">
        <div className="col-4 align-bottom d-flex align-items-center">
          0 へえ
        </div>
        <div className="col-4 text-center">
          <button type="button" className="btn btn-info btn-trivia text-snow rounded-circle">
            へぇ
          </button>
        </div>
        <div className="col-4 text-right">
          by {triviaForModal?.userName}<br />
          合計 {triviaForModal?.acquisitionCount} へえ
        </div>
      </div>
    </Modal>
  );
}

export default TriviaModal;
