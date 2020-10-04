import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

import { fromTimeStampToDate } from '@lib/utils/fromTimeStampToDate';
import TriviaCard from '@components/Trivia/TriviaCard';
import TagIcon from '@components/commons/icons/TagIcon';


function ListPage({ pageProps }) {
  const { data } = pageProps;
  const { tag, docs } = data;

  return (
    <>
      <Head>
        <title>「{tag?.name}」タグが付けられたTrivia</title>
        <meta name="description" content={`${tag.name}を含んだトリビア`} />

      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">
          <TagIcon />
          <span className="ml-2">
            {tag?.name}
          </span>
        </h1>
        <div className="my-2 text-right">
          <span>タグが作られた日 : {fromTimeStampToDate(tag?.createdAt)}</span>
        </div>
        <div className="row">
          {docs.map((trivia, index) => {
            return (
              <Link key={trivia._id} href={`/trivias/${trivia._id}`}>
                <div className={`mb-3 ${index === 0 ? 'col-md-12' : 'col-md-6'}`} key={trivia._id}>
                  <TriviaCard trivia={trivia} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  let data;

  const hostUrl = process.env.SITE_URL || 'http://localhost:3000';

  try {
    const [{ data: tagData }, { data: triviasData }] = await Promise.all([
      axios.get(`${hostUrl}/api/tags/${params.id}`),
      axios.get(`${hostUrl}/api/tags/${params.id}/pages?page=1`),
    ]);
    data = {
      tag: tagData.tag,
      docs: triviasData.docs,
    };
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

ListPage.propTypes = {
  router: PropTypes.object,
  pageProps: PropTypes.object,
};

export default ListPage;
