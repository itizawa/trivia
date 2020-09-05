import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import axios from 'axios';

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

export async function getServerSideProps(context) {
  const { params } = context;

  let tag;

  const hostUrl = process.env.SITE_URL || 'http://localhost:3000';

  try {
    const res = await axios.get(`${hostUrl}/api/tags/${params.id}`);
    tag = res.data.tag;
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: { tag }, // will be passed to the page component as props
  };
}

ListPage.propTypes = {
  router: PropTypes.object,
};

export default ListPage;
