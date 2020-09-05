import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import TriviaList from '@components/Trivia/TriviaList';


function ListPage(props) {
  const { id } = props.router.query;

  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center">タグ</h1>
        <TriviaList tagId={id} />
      </div>
    </>
  );
}

ListPage.propTypes = {
  router: PropTypes.object,
};

export default ListPage;
