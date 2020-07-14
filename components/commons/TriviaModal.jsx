import React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaModal() {
  const { triviaForModal, closeTriviaModal } = TriviaListContainer.useContainer();

  return (
    <Modal size="lg" isOpen={triviaForModal != null} toggle={closeTriviaModal} className="trivia-modal">
      <ModalBody className="p-0 trivia-modal-body">
      </ModalBody>
      <ModalFooter>
        hoge
      </ModalFooter>
    </Modal>
  );
}

export default TriviaModal;
