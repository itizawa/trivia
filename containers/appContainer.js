import { createContainer } from 'unstated-next';
import Axios from 'axios';

function appContainer() {
  // API
  const apiGet = (route, params) => {
    return Axios.get(`api${route}`, { params });
  };

  const apiPost = (route, body) => {
    return Axios.post(`api${route}`, body);
  };

  const apiPut = (route, body) => {
    return Axios.put(`api${route}`, body);
  };

  const apiDelete = (route) => {
    return Axios.delete(`api${route}`);
  };

  return {
    apiGet, apiPost, apiPut, apiDelete,
  };
}

export default createContainer(appContainer);
