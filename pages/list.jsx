import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

import appContainer from '@containers/appContainer';
import TriviaCard from '../components/commons/TriviaCard';

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
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center">トリビア一覧</h1>
        {triviasList.map((trivia) => {
          return (
            <div className="mb-3" key={trivia._id}>
              <React.Suspense fallback={<p>...loading</p>}>
                <TriviaCard trivia={trivia} />
              </React.Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
}


export default ListPage;
