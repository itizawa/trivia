import useSWR from 'swr';

import appContainer from '@containers/appContainer';

const useTags = (triviaId) => {
  const { apiGet } = appContainer.useContainer();

  return useSWR(`/trivias/${triviaId}/tags`, () => apiGet(`/trivias/${triviaId}/tags`));
};

export default useTags;
