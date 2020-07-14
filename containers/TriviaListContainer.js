import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';

import appContainer from '@containers/appContainer';


function TriviaListContainer() {
  const { apiGet } = appContainer.useContainer();

  const [page] = useState(1);
  const [triviasList, setTriviasList] = useState([]);

  const retrieveTrivias = (useCallback(async() => {
    const res = await apiGet(`/trivias?page=${page}`);
    const trivias = res.docs;
    setTriviasList(trivias);
  }, [apiGet, page]));

  useEffect(() => {
    retrieveTrivias();
  }, [retrieveTrivias]);

  return {
    retrieveTrivias, triviasList,
  };
}

export default createContainer(TriviaListContainer);
