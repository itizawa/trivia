import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import Trivia from '@components/Trivia/Trivia';

function TriviaModal(props) {

  function closeModalHandler() {
    if (props.onClose != null) {
      props.onClose();
    }
  }

  return (
    <Modal size="lg" isOpen={props.isOpen} toggle={closeModalHandler}>
      <ModalBody>
        <Trivia trivia={props.trivia} />
      </ModalBody>
      <ModalFooter>
        <Link href={`/trivias/${props.trivia?._id}`}>
          <a className="text-center">
            <span className="ml-2">もっと見る</span>
          </a>
        </Link>
      </ModalFooter>
    </Modal>
  );
}

TriviaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,

  trivia: PropTypes.object,
};

export default TriviaModal;
