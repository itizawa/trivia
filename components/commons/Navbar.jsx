import React from 'react';
import Link from 'next/link';

import UserContainer from '../../containers/UserContainer';
import PersonalDropdown from '../Navbar/PersonalDropdown';

function Navbar() {
  const { login, loadingUser, currentUser } = UserContainer.useContainer();

  function loginHandler() {
    login();
  }

  function renderPersonalDropdown() {
    if (loadingUser) {
      return null;
    }
    return (
      <>
        { currentUser == null
      && (
      <button
        type="button"
        className="btn btn-info text-white"
        onClick={loginHandler}
      >
        login
      </button>
      )}
        { currentUser != null && <PersonalDropdown /> }
      </>
    );
  }

  return (
    <nav className="navbar bg-orange">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-white">
            トリビアの泉
          </a>
        </Link>
        {renderPersonalDropdown()}
      </div>
    </nav>
  );
}

export default Navbar;
