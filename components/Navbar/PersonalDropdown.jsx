import React from 'react';
import Router from 'next/router';

import { toastSuccess } from '@utils/toaster';

import UserContainer from '../../containers/UserContainer';

function PersonalDropdown() {
  const { currentUser, logout } = UserContainer.useContainer();

  async function logoutHandler() {
    await logout();
    toastSuccess('ログアウトにしました');
    Router.push('/');
  }

  return (
    <div className="dropdown">
      <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        <img height="24px" className="rounded-circle bg-white mr-2" src={currentUser.photoURL} />
      </button>
      <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#" onClick={logoutHandler}>Logout</a></li>
      </ul>
    </div>
  );
}

export default PersonalDropdown;
