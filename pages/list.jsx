import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import appContainer from '@containers/appContainer';

import useSWR from 'swr';

import TriviaListContainer from '../containers/TriviaListContainer';
import TriviaCard from '../components/commons/TriviaCard';
import TriviaModal from '../components/commons/TriviaModal';


function ListPage() {
  const { apiGet } = appContainer.useContainer();
  const { data, error } = useSWR('/trivias', () => apiGet('/trivias/user'));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello!</div>;

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
