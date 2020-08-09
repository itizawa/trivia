import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';

import appContainer from '@containers/appContainer';


function TriviaListContainer() {
  const { apiGet } = appContainer.useContainer();

  const [page] = useState(1);
  const [triviasList, setTriviasList] = useState([]);
  const [triviaForModal, setTriviaForModal] = useState(null);
  const [isOpenTriviaModal, setIsOpenTriviaModal] = useState(false);

  const retrieveTrivias = (useCallback(async() => {
    const res = await apiGet(`/trivias?page=${page}`);
    const trivias = res.docs;
    setTriviasList(trivias);
  }, [apiGet, page]));

  const openTriviaModal = (trivia) => {
    setIsOpenTriviaModal(true);
    setTriviaForModal(trivia);
  };

  const closeTriviaModal = (trivia) => {
    setIsOpenTriviaModal(false);
  };

  return {
    retrieveTrivias, triviasList, triviaForModal, openTriviaModal, closeTriviaModal, isOpenTriviaModal,
  };
}

export default createContainer(TriviaListContainer);
