import { createContainer } from 'unstated-next';
import Axios from 'axios';
import urljoin from 'url-join';
import toArrayIfNot from '@utils/toArrayIfNot';

function appContainer() {
  // API
  const apiRequest = async(method, path, params) => {
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

  const apiGet = (route, params) => {
    return apiRequest('get', route, { params });
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
