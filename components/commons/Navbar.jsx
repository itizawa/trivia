import React from 'react';
import Link from 'next/link';

import UserContainer from '../../containers/UserContainer';
import PersonalDropdown from '../Navbar/PersonalDropdown';
import ArrowInRight from './atoms/svg/ArrowInRight';

function Navbar() {
  const { loadingUser, currentUser } = UserContainer.useContainer();


  function renderPersonalDropdown() {
    if (loadingUser) {
      return null;
    }
    return (
      <>
        { currentUser == null && (
        <Link href="/login">
          <a className="text-white text-center">
            <ArrowInRight />
            <span className="ml-2">login</span>
          </a>
        </Link>
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
