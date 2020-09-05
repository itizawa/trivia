import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import axios from 'axios';

import TriviaList from '@components/Trivia/TriviaList';
import { fromTimeStampToDate } from '@lib/utils/fromTimeStampToDate';
import TagIcon from '../../components/commons/icons/TagIcon';


function ListPage(props) {
  const { id } = props.router.query;
  const { tag } = props.pageProps;

  return (
    <>
      <Head>
        <title>{tag?.name}タグが付けられたTrivia</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center">
          <TagIcon />
          <span className="ml-2">
            {tag?.name}
          </span>
        </h1>
        <div className="my-2 text-right">
          <span>タグが作られた日 : {fromTimeStampToDate(tag?.createdAt)}</span>
        </div>
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
  pageProps: PropTypes.object,
};

export default ListPage;
