import React from 'react';
import Link from 'next/link';

import Pencil from './atoms/svg/Pencil';

function Navbar() {
  return (
    <nav className="navbar bg-orange">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-white">
            トリビアの泉
          </a>
        </Link>
        <Link href="/new">
          <a className="text-white d-md-block d-none">
            <Pencil width="24px" height="24px" />
            <span className="ml-1 align-bottom">作成する</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
