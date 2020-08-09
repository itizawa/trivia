import React, { useEffect } from 'react';
import Head from 'next/head';

import TriviaListContainer from '../containers/TriviaListContainer';
import TriviaCard from '../components/commons/TriviaCard';
import TriviaModal from '../components/commons/TriviaModal';

function ListPage() {
  const { retrieveTrivias, triviasList } = TriviaListContainer.useContainer();

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
      <TriviaModal />
    </>
  );
}


export default ListPage;
