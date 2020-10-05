
import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Swal from 'sweetalert2';

import appContainer from '@containers/appContainer';

import GearIcon from '../commons/icons/GearIcon';

function TriviaManageDropdown(props) {
  const { apiDelete } = appContainer.useContainer();

  async function showDeleteAlertHandler() {
    Swal.fire({
      title: 'Trivia を削除しますか?',
      text: '一度消した Trivia は元には戻せません。',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: '削除する!',
      preConfirm: async() => {
        try {
          await apiDelete(`/trivias/${props.triviaId}`);
          Router.push('/list');
        }
        catch (err) {
          Swal.showValidationMessage(
            `トリビア削除中にエラーが発生しました<br>${err.message}`,
          );
        }
      },
    });
  }

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-light btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <GearIcon />
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" type="button" onClick={showDeleteAlertHandler}>
          削除する
        </button>
      </div>
    </div>
  );
}

TriviaManageDropdown.propTypes = {
  triviaId: PropTypes.string.isRequired,
};

export default TriviaManageDropdown;
