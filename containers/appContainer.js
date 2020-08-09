import { createContainer } from 'unstated-next';
import Axios from 'axios';
import urljoin from 'url-join';
import toArrayIfNot from '@utils/toArrayIfNot';
import { getSession } from 'next-auth/client';

function appContainer() {
  // API
  const apiRequest = async(method, path, params) => {

    // set accessToken
    const session = await getSession();
    params.accessToken = session?.accessToken;

    try {
      const res = await Axios[method](urljoin('api', path), params);
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
      const res = await Axios.get(urljoin('api', route), { params });
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

  const apiDelete = (route, params = {}) => {
    return apiRequest('delete', route, params);

  };

  return {
    apiGet, apiPost, apiPut, apiDelete,
  };
}

export default createContainer(appContainer);
