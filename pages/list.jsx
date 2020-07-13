import React, { useState, useEffect, useCallback } from 'react';

import appContainer from '@containers/appContainer';

function ListPage() {
  const { apiGet } = appContainer.useContainer();

  const [page] = useState(1);
  const [triviasList, setTriviasList] = useState([]);

  const retrieveTrivias = useCallback(async() => {
    const res = await apiGet(`/trivias?page=${page}`);
    const trivias = res.docs;
    setTriviasList(trivias);
  }, [apiGet, page]);

  useEffect(() => {
    retrieveTrivias();
  }, [retrieveTrivias]);

  return (
    <div className="bg-snow rounded mt-3 p-3">
      <h1 className="text-center">トリビア一覧</h1>
      {triviasList.map((trivia) => {
        return (
          <p>{trivia.userName}</p>
        );
      })}
    </div>
  );
}


export default ListPage;
