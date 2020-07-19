import React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

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
      <ModalFooter>
        hoge
      </ModalFooter>
    </Modal>
  );
}

export default TriviaModal;
