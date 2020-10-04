import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

import axios from 'axios';
import TriviaCard from '@components/Trivia/TriviaCard';
import PaginationMenu from '../components/commons/PaginationWrapper';

function ListPage({ pageProps }) {
  const { data } = pageProps;
  const { docs } = data;

  /**
   * on click page
   * @param {number} selectedPage selectedPage of trivia
   */
  function onChangePage(selectedPage) {
    window.scrollTo(0, 0);
    Router.push(`/trivias/list/${selectedPage}`);
  }

  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">トリビア一覧</h1>
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
        <PaginationMenu
          activePage={data.page}
          totalItemsCount={parseInt(data.totalDocs)}
          pagingLimit={data.limit}
          changePage={onChangePage}
        />
      </div>
    </>
  );
}


export const getStaticProps = async() => {
  const hostUrl = process.env.SITE_URL || 'http://localhost:3000';

  let data;

  try {
    const res = await axios.get(`${hostUrl}/api/trivias/list?page=1`);
    data = res.data;
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

ListPage.propTypes = {
  pageProps: PropTypes.object,
};

export default ListPage;
