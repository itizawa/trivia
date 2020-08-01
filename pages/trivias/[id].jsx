import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Axios from 'axios';

function Page({ pageProps }) {
  const { trivia } = pageProps;
  console.log(trivia);
  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center">トリビア </h1>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  let trivia;

  try {
    const res = await Axios.get(`http://localhost:3000/api/trivias/${params.id}`);
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
