import { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import { createContainer } from 'unstated-next';

import { toastError, toastSuccess } from '@utils/toaster';
import firebase from '@lib/authConnect';


function UserContainer() {

  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const retrieveCurrentUser = (useCallback(async() => {
    firebase.auth().onAuthStateChanged((user) => {
      try {
        if (user == null) {
          return setCurrentUser(null);
        }
        setCurrentUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      }
      catch (error) {
        toastError(error);
      }
      finally {
        setLoadingUser(false);
      }

    });
  }, []));

  useEffect(() => {
    try {
      retrieveCurrentUser();
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [retrieveCurrentUser]);

  const login = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  };

  const logout = async() => {
    await firebase.auth().signOut();
    retrieveCurrentUser();
    toastSuccess('ログアウトしました');
    Router.push('/');
  };

  return {
    currentUser, login, logout, loadingUser,
  };
}

export default createContainer(UserContainer);
