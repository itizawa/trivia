import React, { useEffect } from 'react';
import Link from 'next/link';
import firebase from '@lib/authConnect';

function Navbar() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  function loginHandler() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  return (
    <nav className="navbar bg-orange">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-white">
            トリビアの泉
          </a>
        </Link>
        <button
          type="button"
          className="btn btn-info"
          onClick={loginHandler}
        >
          login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
