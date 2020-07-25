import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { toastError } from '@utils/toaster';

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
    retrieveCurrentUser();
  }, [retrieveCurrentUser]);

  const login = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
    retrieveCurrentUser();
  };

  const logout = async() => {
    await firebase.auth().signOut();
    retrieveCurrentUser();
  };

  return {
    currentUser, login, logout, loadingUser,
  };
}

export default createContainer(UserContainer);
