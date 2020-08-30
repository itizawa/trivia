import React from 'react';
import Head from 'next/head';

import TriviaList from '../components/commons/trivia/TriviaList';

function ListPage() {

  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center">トリビア一覧</h1>
        <TriviaList />
      </div>
    </>
  );
}


export default ListPage;
