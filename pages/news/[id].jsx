import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Router from 'next/router';
import Markdown from 'react-markdown';

import newsList from '../../lib/newsList';

function Page(props) {
  const { id } = props.router.query;
  const news = newsList.find(news => news.id === parseInt(id));

  return (
    <>
      <Head>
        <title>{news.title}</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <button type="button" className="btn btn-outline-light mb-3" onClick={() => { Router.push('/news') }}>リストに戻る</button>
        <h1 className="text-center border-bottom mb-3">{news.title}</h1>
        {news.createdAt}<br />
        <Markdown source={news.body} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { }, // will be passed to the page component as props
  };
}

Page.propTypes = {
  router: PropTypes.object,
};

export default Page;
