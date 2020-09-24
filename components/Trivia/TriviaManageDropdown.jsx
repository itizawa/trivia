
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import appContainer from '@containers/appContainer';

import { toastError } from '@utils/toaster';

import GearIcon from '../commons/icons/GearIcon';
import TrashIcon from '../commons/icons/TrashIcon';

function TriviaManageDropdown(props) {
  const { apiDelete } = appContainer.useContainer();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  function toggleDeleteModalHandler() {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }

  async function deleteTriviaHandler() {
    try {
      await apiDelete(`/trivias/${props.triviaId}`);
    }
    catch (error) {
      toastError(error, 'Error');
    }
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }

  return (
    <>
      <div className="btn-group">
        <button type="button" className="btn btn-outline-light btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <GearIcon />
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button" onClick={toggleDeleteModalHandler}>
            <span className="ml-2">
              削除する
            </span>
          </button>
        </div>
      </div>
      <Modal size="lg" isOpen={isOpenDeleteModal} toggle={toggleDeleteModalHandler}>
        <ModalHeader className="bg-danger text-snow">
          <TrashIcon />
          <span className="ml-2">
            削除します
          </span>
        </ModalHeader>
        <ModalBody>
          削除します(一度消した物は元には戻せません)
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-danger" onClick={deleteTriviaHandler}>削除します</button>
        </ModalFooter>
      </Modal>
    </>
  );
}

TriviaManageDropdown.propTypes = {
  triviaId: PropTypes.string.isRequired,
};

export default TriviaManageDropdown;
