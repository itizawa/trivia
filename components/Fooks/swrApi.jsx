import useSWR from 'swr';

import appContainer from '@containers/appContainer';

export const useTriviaList = (url, page) => {
  const { apiGet } = appContainer.useContainer();

  return useSWR(url, () => apiGet(url, { page }));
};

export const useTags = (triviaId) => {
  const { apiGet } = appContainer.useContainer();

  return useSWR(`/trivias/${triviaId}/tags`, () => apiGet(`/trivias/${triviaId}/tags`));
};
