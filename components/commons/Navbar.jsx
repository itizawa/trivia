import React from 'react';
import Link from 'next/link';

import { useSession } from 'next-auth/client';

import PersonalDropdown from '../Navbar/PersonalDropdown';
import ArrowInRight from './icons/ArrowInRight';

function Navbar() {
  const [session, loading] = useSession();

  function renderPersonalDropdown() {
    if (loading) {
      return null;
    }
    return (
      <>
        { session == null && (
        <Link href="/login">
          <a className="text-white text-center">
            <ArrowInRight />
            <span className="ml-2">login</span>
          </a>
        </Link>
        )}
        { session != null && <PersonalDropdown /> }
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
