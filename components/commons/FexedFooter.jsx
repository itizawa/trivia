import React from 'react';
import Link from 'next/link';

function FixedFooter() {
  return (
    <nav className="navbar bg-info fixed-bottom">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-white">
            フッター
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default FixedFooter;
