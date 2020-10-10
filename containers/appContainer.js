import { createContainer } from 'unstated-next';
import Axios from 'axios';
import urljoin from 'url-join';
import toArrayIfNot from '@utils/toArrayIfNot';
import { useSession, getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

function AppContainer() {
  Axios.defaults.baseURL = process.env.SITE_URL || 'http://localhost:3000/';
  const [session] = useSession();
  const [currentUser, setCurrentUser] = useState(null);

  // API
  const apiRequest = async(method, path, params) => {

    // set accessToken
    const session = await getSession();
    params.accessToken = session?.accessToken;

    try {
      const res = await Axios[method](urljoin('https://trivia-backend.an.r.appspot.com', 'api', path), params);
      return res.data;
    }
    catch (_err) {
      const err = _err.response ? _err.response.data.errors : _err;
      const errs = toArrayIfNot(err);
      throw errs;
    }
  };

  const apiGet = async(route, __params = {}) => {
    const params = __params;

    // set accessToken
    const session = await getSession();
    params.accessToken = session?.accessToken;

    try {
      const res = await Axios.get(urljoin('https://trivia-backend.an.r.appspot.com', 'api', route), { params });
      return res.data;
    }
    catch (_err) {
      const err = _err.response ? _err.response.data.errors : _err;
      const errs = toArrayIfNot(err);
      throw errs;
    }
  };

  const apiPost = (route, params = {}) => {
    return apiRequest('post', route, params);
  };

  const apiPut = (route, params = {}) => {
    return apiRequest('put', route, params);
  };

  const apiDelete = async(route, __params = {}) => {
    const params = __params;

    // set accessToken
    const session = await getSession();
    params.accessToken = session?.accessToken;

    try {
      const res = await Axios.delete(urljoin('api', route), { params });
      return res.data;
    }
    catch (_err) {
      const err = _err.response ? _err.response.data.errors : _err;
      const errs = toArrayIfNot(err);
      throw errs;
    }
  };

  useEffect(() => {
    async function retrieveUser() {
      if (session == null) {
        return;
      }
      const res = await apiGet('/users/me');
      const { user } = res;
      setCurrentUser(user);
    }
    retrieveUser();
  }, [session]);

  return {
    currentUser, apiGet, apiPost, apiPut, apiDelete,
  };
}

export default createContainer(AppContainer);
