import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Axios from 'axios';

import Trivia from '../../components/Trivia/Trivia';


function Page({ pageProps }) {
  const { trivia } = pageProps;
  const url = `https://trivia-ogp.vercel.app/api/ogp?forwardText=${trivia?.forwardText}&backwardText=${trivia?.backwardText}`;

  return (
    <>
      <Head>
        <title>{trivia.forwardText}{trivia.backwardText}</title>
        <meta property="og:image" content={url} />
        <meta property="og:description" content={trivia.bodyText} />
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <button type="button" className="btn btn-outline-light mb-3" onClick={() => { Router.push('/list') }}>リストに戻る</button>
        <Trivia trivia={trivia} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  let trivia;

  const hostUrl = process.env.SITE_URL || 'http://localhost:3000';

  try {
    const res = await Axios.get(`${hostUrl}/api/trivias/${params.id}`);
    trivia = res.data.trivia;
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: { trivia }, // will be passed to the page component as props
  };
}

Page.propTypes = {
  pageProps: PropTypes.object.isRequired,
};


export default Page;
