import React from 'react';

import UserContainer from '../../containers/UserContainer';

function PersonalDropdown() {
  const { currentUser, logout } = UserContainer.useContainer();

  function logoutHandler() {
    logout();
  }

  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        <img height="24px" className="rounded-circle bg-white mr-2" src={currentUser.photoURL} />
      </button>
      <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#" onClick={logoutHandler}>Logout</a></li>
      </ul>
    </div>
  );
}

export default PersonalDropdown;
