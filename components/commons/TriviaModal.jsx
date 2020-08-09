import React from 'react';
import Link from 'next/link';

import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import TriviaListContainer from '@containers/TriviaListContainer';
import Trivia from '@components/commons/Trivia';

function TriviaModal() {
  const { triviaForModal, closeTriviaModal, isOpenTriviaModal } = TriviaListContainer.useContainer();

  function closeModalHandler() {
    if (closeTriviaModal != null) {
      closeTriviaModal();
    }
  }

  return (
    <Modal size="lg" isOpen={isOpenTriviaModal} toggle={closeModalHandler}>
      <ModalBody>
        <Trivia trivia={triviaForModal} />
      </ModalBody>
      <ModalFooter>
        <Link href={`/trivias/${triviaForModal?._id}`}>
          <a className="text-center">
            <span className="ml-2">もっと見る</span>
          </a>
        </Link>
      </ModalFooter>
    </Modal>
  );
}

export default TriviaModal;
