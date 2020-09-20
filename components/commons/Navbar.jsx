import React from 'react';
import Link from 'next/link';

import { useSession } from 'next-auth/client';

import PersonalDropdown from '../Navbar/PersonalDropdown';

import ArrowInRight from './icons/ArrowInRight';
import Pencil from './icons/Pencil';
import Home from './icons/Home';
import ViewList from './icons/ViewList';
import NewsIcon from './icons/NewsIcon';

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
    <nav className={`navbar ${process.env.DEV_MODE ? 'bg-orange' : 'bg-tblue'}`}>
      <div className="container-fluid">
        <div className="mr-auto">
          <Link href="/">
            <a className="navbar-brand text-white">
              トリビアオンライン
              {process.env.DEV_MODE && 'Dev Mode'}
            </a>
          </Link>
        </div>
        <div className="text-center mr-3 d-none d-md-block">
          <Link href="/">
            <a className="text-white text-center mr-5">
              <Home width="24px" height="24px" />
              <span className="ml-2 align-bottom d-none d-lg-inline-block">Home</span>
            </a>
          </Link>
          <Link href="/list">
            <a className="text-white text-center mr-5">
              <ViewList width="24px" height="24px" />
              <span className="ml-2 align-bottom d-none d-lg-inline-block">List</span>
            </a>
          </Link>
          <Link href="/new">
            <a className="text-white text-center mr-5">
              <Pencil width="24px" height="24px" />
              <span className="ml-2 align-bottom d-none d-lg-inline-block">Create</span>
            </a>
          </Link>
          <Link href="/news">
            <a className="text-white text-center mr-5">
              <NewsIcon width="24px" height="24px" />
              <span className="ml-2 align-bottom d-none d-lg-inline-block">News</span>
            </a>
          </Link>
        </div>
        {renderPersonalDropdown()}
      </div>
    </nav>
  );
}

export default Navbar;
