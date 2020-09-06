import React from 'react';
import Head from 'next/head';

import TriviaList from '../components/Trivia/TriviaList';

function ListPage() {

  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">トリビア一覧</h1>
        <TriviaList />
      </div>
    </>
  );
}


export default ListPage;
